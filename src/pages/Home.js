import React from 'react';

// CSS Body
import '../css/Body.css';

//Composant
import Header from '../componant/Header';
import Footer from '../componant/Footer';
import AboutMe from '../componant/AboutMe';

function Home() {
  return (
        <div>
          {<Header />}
          <div id="about">
            {<AboutMe />}
          </div>
          {<Footer />}
        </div>
)}

export default Home;
