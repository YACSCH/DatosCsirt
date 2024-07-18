import React from 'react';
import { Box, Grid, Card, CardContent, Container, Skeleton, Typography } from '@mui/material';

const SkeletonCard = () => (
    <Card variant="outlined" sx={{ width: '100%', height: '100%', borderWidth: '2px', boxShadow: '10px 0px 20px -5px rgba(0, 0, 0, 0.3)', borderRadius: 5, }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" component="div" gutterBottom sx={{ minHeight: '6rem' }}>
                <Skeleton variant="text" width="60%" />
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '2rem' }}>
                <Skeleton variant="text" width="40%" />
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '6rem' }}>
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="70%" />
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom sx={{ minHeight: '3rem' }}>
                <Skeleton variant="text" width="50%" />
            </Typography>
            <Box sx={{ mt: 'auto', my: 1, minHeight: '2rem' }}>
                <Skeleton variant="rectangular" width="100%" height={40} />
            </Box>
        </CardContent>
    </Card>
);

const SkeletonCards = () => (
    <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
            {Array.from({ length: 8 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <SkeletonCard />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default SkeletonCards;