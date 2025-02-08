import React from 'react';

// CSS
import '../css/body/Body.css';

// Composants
import Header from '../componant/Header';
import Footer from '../componant/Footer';
import AboutMe from '../componant/AboutMe';

function Home() {
  return (
    <>
      <Header />
      <div id="about">
        <AboutMe />
      </div>
      <Footer />
    </>
  );
}

export default Home;

