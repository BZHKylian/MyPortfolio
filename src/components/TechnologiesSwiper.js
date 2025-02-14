import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TechnologiesSwiper = ({ technologies = [] }) => {
  if (!technologies || !Array.isArray(technologies) || technologies.length === 0) {
    return <p>Chargement des technologies...</p>;
  }

  // Aplatir les technologies pour les afficher toutes dans le même Splide
  const allTechnologies = technologies.flatMap(categoryObj => 
    Object.values(categoryObj).flat()
  );

  return (
    <div className="technologies-swiper">
      <Splide
        options={{
          
          perPage:1, 
          arrows: true,
          pagination: true,
          autoplay: true,
          interval:2500,
        }}
      >
        {allTechnologies.map((item) => (
          <SplideSlide key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.alt} title={item.title} />
              <p>{item.nom}</p>
            </div>
          </SplideSlide>
        ))}
        
          <SplideSlide> {/* Création d'un élément vide car sinon bash ne s'affiche pas */}
            <div className="card">
              <p></p>
            </div>
          </SplideSlide>
      </Splide>
    </div>
  );
};

export default TechnologiesSwiper;
