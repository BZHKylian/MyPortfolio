import React, { useEffect, useState } from 'react';
import maPhoto from "../asset/img/kylian.jpg";
import kylianPhare from '../asset/img/kylianPhare.jpg';

import '../css/aboutMe/About.css';

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
                    <div className="info">
                        <h1>Salut, Kylian Houedec !</h1>
                        <p id="age">{age} ans</p>
                        <p id="etude">🎓 Étudiant en 2<sup>ème</sup> année BUT Informatique à l'IUT de Lannion, passionné par le développement web.</p>
                    </div>
                    <div className='recherche'>
                        <h2>Actuellement à la recherche d'opportunités !</h2>
                        <p>🚀 Explore mes projets et découvre mes compétences en programmation.</p>

                        <p>📩 Envie de discuter ou collaborer ? Contacte-moi !</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;  // Change Footer à Header si c'est un Header
