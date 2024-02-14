// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop muted className="background-video">
        <source src={require('./assets/back.mp4')} type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="title">Baby, will you be my valentine!</h1>
        <div className="buttons">
          <Link to="/yay" className="button">Yay</Link>
          <Link to="/nay" className="button">Nay</Link>
        </div>
      </div>
    </div>
  );
};

const YayPage = () => {
  return (
    <div className="yay-page">
      <video autoPlay loop muted className="background-video">
        <source src={require('./assets/yay.mp4')} type="video/mp4" />
      </video>
    </div>
  );
};

const NayPage = () => {
  return (
    <div className="nay-page">
      <video autoPlay loop muted className="background-video">
        <source src={require('./assets/nay.mp4')} type="video/mp4" />
      </video>
      <Link to="/" className="try-again">Try Once again</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/yay" element={<YayPage />} />
          <Route path="/nay" element={<NayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
