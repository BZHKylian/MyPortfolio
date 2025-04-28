import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject'; // Assure-toi que le chemin est correct
import projets from '../data/projets'; // Assure-toi que le chemin est correct

function Portfolio() {
  // Extraction des IDs des projets (par exemple, ["1", "2", "3"])
  const projectIds = Object.keys(projets); 

  return (
    <>
      <Header />
      <div id='divPortfolio'>
        <h3>Mon portfolio</h3>
        <p>
          Ici, vous trouverez l’ensemble des projets auxquels j’ai participé, qu’ils soient personnels 
          ou réalisés dans le cadre de mes études. Certains ont été conçus en autonomie, d’autres en 
          collaboration avec des membres de mon groupe. Chaque projet reflète mon implication, ma progression 
          et ma passion pour le développement, que ce soit à titre individuel ou collectif.
        </p>
        <div className="portfolio">
          {projectIds.map((id) => {
            const project = projets[id];
            return (
              <CardProject
                project={project}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
