import React from 'react';
import mesTechnologies from '../data/mesTechnologies';
import { useNavigate } from "react-router-dom";
import { strNoAccent } from '../utils/strNoAccent';



// CardProject reçoit un projet complet comme prop
function CardProject({ project }) {
    const navigate = useNavigate();

    const handleVoirProjet = () => {
        localStorage.setItem('selectedProjet', JSON.stringify(project));
        navigate('/projet', { state: { project } });
    };

    // Vérification que le projet existe
    if (!project) {
        return <p>Projet non trouvé.</p>;  // Si le projet est invalide, afficher ce message
    }

    // Fonction pour obtenir les technologies utilisées par leur type
    const getTechnologyDetails = (techId) => {
        // Chercher dans toutes les catégories de technologies
        console.log(typeof techId); // Doit correspondre à typeof tech.id (number ou string)

        const allTechs = mesTechnologies[0]; // Accès au premier objet du tableau
        const allCategories = [
            ...allTechs.langages_de_programmation,
            ...allTechs.fichier,
            ...allTechs.bases_de_donnees,
            ...allTechs.outils_de_developpement,
            ...allTechs.outils_de_conception,
            ...allTechs.outils_shell,
        ];
        return allCategories.find(tech => Number(tech.id) === Number(techId));
    };

    return (
        <div className='cardProject'>
            <p className={`${strNoAccent(project.status).toLowerCase()} projectStatus`}>{project.status}</p>

            <section className="divProject">
                <div className="imageCardImage">
                    {/* Affiche une image si elle est présente, sinon affiche un message */}
                    {project.imageResume && project.imageResume.length > 0 ? (
                        <img src={project.imageResume} alt={`Image de ${project.titre}`} />
                    ) : (
                        <p>Aucune image disponible</p>
                    )}
                </div>

                <div className="cardContent">
                    <div className='titreProjet '>
                        <h3>{project.titre}</h3>
                    </div>
                    <p><strong>Résumé:</strong> {project.resume}</p>
                    <p><strong>Catégorie:</strong> {project.categorie}</p>

                    {/* Affichage des technologies utilisées */}
                    <div className="cardTechnologies">
                        <h4>Technologies utilisées :</h4>
                        <ul>
                            {console.log("Technologies du projet :", project.technologies)}

                            {project.technologies && project.technologies.length > 0 ? (

                                project.technologies.map((techId, index) => {

                                    const techDetails = getTechnologyDetails(techId.id);
                                    return (
                                        <li key={index}>
                                            {console.log(techDetails)}
                                            {techDetails ? (
                                                <>

                                                    <img
                                                        src={techDetails.imageSombre}
                                                        alt={techDetails.alt}
                                                        title={techDetails.title}
                                                    />
                                                </>
                                            ) : (
                                                <p>Technologie non trouvée</p>
                                            )}
                                        </li>
                                    );
                                })
                            ) : (
                                <li>Aucune technologie spécifiée</li>
                            )}
                        </ul>
                    </div>
                    <div className="divProjet">
                        <button onClick={handleVoirProjet}>
                            <p>Voir le projet</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CardProject;
