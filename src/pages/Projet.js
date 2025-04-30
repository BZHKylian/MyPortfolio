import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function DetailProjet() {
    const location = useLocation();
    const navigate = useNavigate();
    const [projet, setProjet] = useState(location.state?.projet || null);

    function date(date) {
        let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        date = mois[parseInt(date.substr(5, 7)) - 1] + " " + date.substr(0, 4)
        return date
    }

    useEffect(() => {
        if (!projet) {
            const savedProjet = localStorage.getItem("selectedProjet");
            if (savedProjet) {
                setProjet(JSON.parse(savedProjet));
            } else {
                navigate("/");
            }
        }
    }, [projet, navigate]);

    if (!projet) return null;

    return (
        <>
            <Header project={projet} />
            <main className="detail-projet">
                <h1>{projet.titre}</h1>
                <p className="meta">
                    {projet.date_fin ? (<p>{date(projet.date_debut)} à {date(projet.date_fin)} • {projet.contexte} • {projet.categorie}</p>) : <p>Depuis {date(projet.date_debut)} • {projet.contexte} • {projet.categorie}</p>}
                </p>
                <div className="images-swiper">
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 1,
                            arrows: true,
                            autoplay: true,
                            interval: 5000,
                            pauseOnHover: true,
                            resetProgress: true,
                            speed: 800,
                        }}
                    >
                        {projet.images.map(item =>
                        (
                            <SplideSlide key={item.id}>
                                <div className="card">
                                    <img src={item.lien} alt={item.alt} title={item.title} />
                                    <p>{item.nom}</p>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>

                </div>
                <section>
                    <h2>Description</h2>
                    <p>{projet.description}</p>
                </section>

                {projet.groupe && (
                    <section>
                        <h2>Travail en groupe</h2>
                        <p>{projet.groupe}</p>
                    </section>
                )}

                <section>
                    <h2>Technologies</h2>
                    <ul>
                        {projet.technologies?.map((tech, index) => (
                            <li key={index}>{tech.description}</li>
                        ))}
                    </ul>
                </section>

                {projet.outils && (
                    <section>
                        <h2>Outils</h2>
                        <ul>
                            {projet.outils.map((outil, index) => (
                                <li key={index}>{outil.description}</li>
                            ))}
                        </ul>
                    </section>
                )}

                <section>
                    <h2>Étapes du projet</h2>
                    <ol>
                        {projet.etapes?.map((etape, index) => (
                            <li key={index}>
                                <strong>{etape.nom} :</strong> {etape.description}
                            </li>
                        ))}
                    </ol>
                </section>

                <div className="links">
                    {projet.lien_github && (
                        <a
                            className="github"
                            href={projet.lien_github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir le code
                        </a>
                    )}
                    {projet.lien_demo && (
                        <a
                            className="demo"
                            href={projet.lien_demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Démo en ligne
                        </a>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DetailProjet;
