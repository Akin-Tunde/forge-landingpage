import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPages from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Dynamic route for landing pages */}
        <Route path="/landing-pages/:landingId" element={<LandingPages />} />
      </Routes>
    </Router>
  );
};

export default App;
