import React from 'react';

// Composants
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import QuiSuisJe from '../components/QuiSuisje';
import Technologies from '../components/Technologies';

function Home() {
  return (
    <>
      <Header />
      <div id="about">
        <AboutMe />
        <QuiSuisJe />
        <Technologies />
        
      </div>
      <Footer />
    </>
  );
}

export default Home;

