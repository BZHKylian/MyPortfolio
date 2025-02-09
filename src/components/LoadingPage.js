import React from 'react';
import '../css/LoadingPage.css';
import logo from '../asset/img/kh.png'; // Assure-toi que le chemin est correct

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-circle">
        <img src={logo} alt="Logo" className="loading-logo" />
      </div>
    </div>
  );
};

export default LoadingPage;
