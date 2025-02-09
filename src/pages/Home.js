import React from 'react';

// CSS
import '../css/body/Body.css';

// Composants
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import TechnologiesSwiper from '../components/TechnologiesSwiper';

//Fichier json techno
import technologie from "../JSON/mesTechnologies.json";


function Home() {
  return (
    <>
      <Header />
      <div id="about">
        <AboutMe />
        <TechnologiesSwiper technologies={technologie}/>
      </div>
      <Footer />
    </>
  );
}

export default Home;

