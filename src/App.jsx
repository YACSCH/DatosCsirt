import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Alerts from './views/Alerts'
import News from './views/News'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Alerts />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/News" element={<News />} />
          {/*  <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
