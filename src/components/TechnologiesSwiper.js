import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TechnologiesSwiper = ({ technologies = [] }) => {
  const splideRef = useRef(null);

  const allTechnologies = technologies.flatMap(categoryObj =>
    Object.values(categoryObj).flat()
  );

  useEffect(() => {
    const splide = splideRef.current?.splide;

    if (splide) {
      splide.on('move', () => {
        const currentIndex = splide.index;
        const slidesPerPage = splide.options.perPage;
        const totalSlides = splide.length;

        if (currentIndex >= totalSlides - slidesPerPage) {
          setTimeout(() => {
            splide.go(0);
          }, 5000);
        }
      });
    }
  }, []);

  if (!technologies || !Array.isArray(technologies) || allTechnologies.length === 0) {
    return <p>Chargement des technologies...</p>;
  }

  return (
    <div className="technologies-swiper">
      <Splide
        ref={splideRef}
        options={{
          type: 'slide',
          perPage: 8,
          arrows: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          resetProgress: true,
          speed: 800,
        }}
      >
        {allTechnologies.map((item) => (
          <SplideSlide key={item.id}>
            <div className="card">
              <img src={item.imageClaire} alt={item.alt} title={item.title} />
              <p>{item.nom}</p>
            </div>
          </SplideSlide>
        ))}
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
