import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Composant qui prend un tableau de technologies en paramètre
const TechnologiesSwiper = ({ technologies }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={4} loop>
      {technologies.map((tech) => (
        <SwiperSlide key={tech.id}>
          <div className="tech-slide">
            <img 
              src={tech.image}  
              alt={tech.alt} 
              title={tech.title} 
            />
            <p>{tech.nom}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TechnologiesSwiper;
