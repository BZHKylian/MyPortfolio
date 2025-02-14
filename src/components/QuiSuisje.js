import React from 'react';
import maPhoto from "../asset/img/kylian.jpg";
import download from "../asset/img/telecharger.png"; 

import '../css/aboutMe/QuiSuisJe.css';

function QuiSuisJe() {
    return (
        <>
        <section className="quiSuisJe">
            <div className="photo-container">
                <img src={maPhoto} alt="Kylian Houedec" className="photo" />
            </div>
            <div className="texte-container">
                <h2>Qui suis-je ?</h2>
                <p>
                    Actuellement étudiant en BUT Informatique à l'IUT de Lannion, je suis passionné par la programmation et la technologie. 
                    Mon parcours m'a permis de développer des compétences en développement web, ainsi qu'en gestion de projets logiciels.
                    Curieux et motivé, je cherche continuellement à améliorer mes compétences en travaillant sur des projets concrets et en apprenant de nouvelles technologies.
                    Mon objectif à court terme est de trouver un stage de 9 à 12 semaines à partir d'avril 2025, dans le domaine du développement web ou logiciel, afin de mettre en pratique mes connaissances et d'acquérir une expérience professionnelle précieuse. 
                    Par la suite, je suis également à la recherche d'une alternance pour l'année 2025/2026, où je pourrai continuer à développer mes compétences tout en contribuant à des projets plus important.
                </p>
                <div className='voirPlus'>
                    <a href='asset/pdf/CV_HOUEDEC_Kylian.pdf' download>
                        <img src={download}/>
                        <p>Mon CV</p>
                    </a>
                </div>
            </div>
        </section>
        <div className='section-end'></div>
        </>
    );
}

export default QuiSuisJe;
