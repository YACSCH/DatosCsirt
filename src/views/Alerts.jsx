import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CardMedia, Grid, Button, Card, CardContent, Typography, Divider, ListItemText } from '@mui/material';
import SkeletonCards from '../components/SkeletonCard';

import malwareImage from '../assets/icon_malware.svg';
import phishingImage from '../assets/icon_phishing.svg';
import vulnerabilityImage from '../assets/icon_vulnerabilidad.svg';



const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 10);

    const formattedStartDate = `${startDate.toISOString().split('T')[0]}T00:00:00`;
    const formattedEndDate = `${currentDate.toISOString().split('T')[0]}T23:59:59`;

    useEffect(() => {
        const fetchAlerts = async () => {
            const url = `/api/v1/alerts/?page=1&from_date=${formattedStartDate}&to_date=${formattedEndDate}`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'https://csirt.gob.cl',
                        'Vary': 'Origin',
                    },
                });
                setAlerts(response.data.items);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAlerts();
    }, [formattedStartDate, formattedEndDate]);

    if (loading) return <SkeletonCards />;
    if (error) return <p>Error: {error.message}</p>;

    const getImageUrl = (title) => {
        if (title.toLowerCase().includes('malware')) {
            return malwareImage;
        } else if (title.toLowerCase().includes('phishing')) {
            return phishingImage;
        } else if (title.toLowerCase().includes('vulnerabilidad')) {
            return vulnerabilityImage;
        } else {
            return '';
        }
    };

    return (
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                {alerts.map((alert, idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <Card
                            variant="outlined"
                            sx={{
                                width: '300',
                                height: '100%',
                                borderWidth: '1px',
                                boxShadow: '10px 0px 20px -5px rgba(0, 0, 0, 0.3)',
                                borderColor: "#4CAF49",
                                borderRadius: 5,
                                backgroundImage: `url(${getImageUrl(alert.title)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                backgroundColor:'#e0f7fa'
                                                            }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%',  backdropFilter: 'blur(5px)', }}>
                                <Typography variant="h6" component="div" gutterBottom sx={{ minHeight: '6rem' }}>
                                    {alert.title}
                                </Typography>

                                <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '2 rem' }}>
                                    <strong>Clase</strong>: {alert.alert_class}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '6rem' }}>
                                    <strong>Descripcion</strong>: {alert.specific_description.slice(0, 150)}{alert.specific_description.length > 200 ? '...' : ''}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '3rem' }}>
                                    <strong>Entidades Afectadas</strong>: {alert.affected_entities}
                                </Typography>
                                <Divider sx={{ mt: 'auto', my: 1, minHeight: '2rem' }} />
                                <Button
                                    style={{
                                        borderRadius: 35,
                                        color:'green',
                                        borderColor:'green',


                                    }}
                                    variant="outlined"
                                    href={`https://csirt.gob.cl/${alert.category}/${alert.code.toLowerCase()}/`}
                                    sx={{ mt: 2 }}
                                    target="_blank" // Para abrir en una nueva pestaña
                                >
                                    Ver Detalles
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Alerts;