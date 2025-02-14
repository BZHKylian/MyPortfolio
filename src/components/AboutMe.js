import React, { useEffect, useState } from 'react';
import maPhoto from "../asset/img/kylian.jpg";

function AboutMe() {

    const birthDate = "2005-08-23";
    const [age, setAge] = useState(null);

    const calculateAge = (date) => {
        const today = new Date();
        date = new Date(date);
        let age = today.getFullYear() - date.getFullYear();
        const m = today.getMonth() - date.getMonth();


        if((m < 0) || (m === 0 && today.getDate() < date.getDate())){
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
                        <p id='bonjour'>👋 Hey, moi c'est :</p>
                        <h1>Kylian Houedec</h1>
                        <p id="age">{age} ans</p>
                        <p id="etude">🎓 Étudiant en 2<sup>ème</sup> année BUT Informatique à l'IUT de Lannion, passionné par le développement web.</p>
                    </div>
                    <div className='recherche'>
                        <h2>Actuellement à la recherche d'opportunités !</h2>
                        <p>🚀 Explorez mes projets et découvrez mes compétences en programmation.</p>
                        <p>📩 Envie de discuter ou collaborer ? Contactez-moi !</p>
                    </div>
                    <div className='voirPlus'>
                        <a>Mes Projets</a>
                        <a href='#/contact'>Me Contacter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;  // Change Footer à Header si c'est un Header
