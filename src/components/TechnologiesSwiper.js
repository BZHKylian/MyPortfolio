import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TechnologiesSwiper = ({ technologies = [] }) => {
  const splideRef = useRef(null);

  if (!technologies || !Array.isArray(technologies) || technologies.length === 0) {
    return <p>Chargement des technologies...</p>;
  }

  const allTechnologies = technologies.flatMap(categoryObj =>
    Object.values(categoryObj).flat()
  );

  useEffect(() => {
    const splide = splideRef.current?.splide;
  
    if (splide) {
      splide.on('move', () => {
        const currentIndex = splide.index;
        const slidesPerPage = splide.options.perPage;  // Récupère le nombre de diapositives visibles par page
        const totalSlides = splide.length;
  
        // Si on est sur la dernière diapositive visible de la page
        if (currentIndex >= totalSlides - slidesPerPage) {
          // Attendre un instant avant de revenir à la première
          setTimeout(() => {
            splide.go(0); // Aller à la première diapositive
          }, 5000); // Délai avant de revenir au début
        }
      });
    }
  }, []);
  

  return (
    <div className="technologies-swiper">
      <Splide
        ref={splideRef}
        options={{
          type: 'slide', // Pas de loop ici
          perPage: 7, // Nombre de slides visibles par page
          arrows: true,
          autoplay: true,
          interval: 5000, // Temps de pause entre chaque changement
          pauseOnHover: true,
          resetProgress: true, // Réinitialise le progress des dots
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

        {/* Slide vide supplémentaire si besoin */}
        <SplideSlide>
          <div className="card">
            <p></p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default TechnologiesSwiper;
