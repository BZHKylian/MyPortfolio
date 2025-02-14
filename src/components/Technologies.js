import React from 'react';
import TechnologiesSwiper from './TechnologiesSwiper';
import mesTechnologies from '../data/mesTechnologies'

function Technologies() {
  return (
    <section className="technologies">
      <h2>Technologies et Outils que j'utilise</h2>
      {/* Petit texte explicatif */}
      <p className="tech-description">
        Voici une sélection des technologies que j'ai utilisées au moins une fois dans mes projets personnels ou 
        universitaires, et que je continue d'explorer et d'approfondir. Chaque technologie a joué un rôle important 
        dans le développement de mes compétences techniques, et certaines sont encore en cours d'apprentissage pour 
        me permettre de maîtriser pleinement leurs capacités.
      </p>
      {/* Utilisation du composant TechnologiesSwiper avec le tableau en prop */}
      <TechnologiesSwiper technologies={mesTechnologies} />
    </section>
  );
}

export default Technologies;
