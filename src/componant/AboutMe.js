import React, { useEffect, useState } from 'react';
import maPhoto from "../asset/img/kylian.jpg";
import kylianPhare from '../asset/img/kylianPhare.jpg';

import '../css/About.css';

function AboutMe() {

    const birthDate = new Date("2005-08-23");
    const [age, setAge] = useState(null);

    const calculateAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();


        if(m < 0 || m === 0 && today.getDate() < birthDate.getDate()){
            age--;
        }
        return age;
    }

    useEffect(()=>{
        setAge(calculateAge(birthDate));
    }, []);

    return (
        <section className="about-me">
            <div className="about-overlay">
                <img id="maPhoto" src={maPhoto} alt="Kylian Houedec" />
                <div>
                    <div>
                        <h1>Kylian HOUEDEC</h1>
                        <p id="age">{age} ans</p>
                        <p id="etude">Étudiant en 2<sup>ème</sup> année BUT Informatique à l'IUT de Lannion.</p>
                    </div>
                    <div>
                        <h2>À la recherche d'opportunités !</h2>
                        <p>Je suis actuellement à la recherche :</p>
                        <ul>
                            <li>D'un <strong>stage</strong> début avril 2025 d'une durée de 8 à 12 semaines, dans le
                                développement informatique, que ce soit web ou logiciel.</li>
                            <li>D'une <strong>alternance</strong> pour l'année 2025-2026, afin de continuer à développer
                                mes compétences tout en contribuant activement à vos projets.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;  // Change Footer à Header si c'est un Header
