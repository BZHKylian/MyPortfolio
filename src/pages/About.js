import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';


function AboutPage() {
  // Animation pour le titre qui se dévoile avec le scroll
  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  // Section 1 animation : lorsque la section entre dans la vue, elle "swipe" de bas en haut
  const { ref: sectionRef1, inView: sectionInView1 } = useInView({
    triggerOnce: true, // Déclenche l'animation une seule fois
    threshold: 0.5, // La section doit être à moitié visible pour l'animation
  });

  const section1Animation = useSpring({
    transform: sectionInView1 ? 'translateY(0)' : 'translateY(50px)', // Fait "swiper" la section vers le haut
    opacity: sectionInView1 ? 1 : 0,
    config: { tension: 200, friction: 20 }, // Ajuste la fluidité de l'animation
  });

  // Section 2 animation : même effet pour une autre section
  const { ref: sectionRef2, inView: sectionInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const section2Animation = useSpring({
    transform: sectionInView2 ? 'translateY(0)' : 'translateY(50px)',
    opacity: sectionInView2 ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="about-page">
      {/* Titre qui devient visible au scroll */}
      <animated.h1 style={titleAnimation} className="main-title">
        Bienvenue sur mon portfolio
      </animated.h1>

      {/* Première section qui apparaît avec un swipe */}
      <animated.section
        ref={sectionRef1}
        style={section1Animation}
        className="about-section"
      >
        <h2>Qui suis-je ?</h2>
        <p>
          Je suis un développeur passionné par le code, actuellement étudiant en informatique à l'IUT de Lannion.
        </p>
      </animated.section>

      {/* Deuxième section qui apparaît avec un swipe */}
      <animated.section
        ref={sectionRef2}
        style={section2Animation}
        className="about-section"
      >
        <h2>Mes Technologies</h2>
        <p>Voici les technologies que j'utilise dans mes projets.</p>
        {/* Ajoute un Swiper ici si nécessaire */}
      </animated.section>
    </div>
  );
}

export default AboutPage;
