import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DetailProjet() {
    const location = useLocation();
    const navigate = useNavigate();
    const [projet, setProjet] = useState(location.state?.projet || null);

    useEffect(() => {
        if (!projet) {
            const savedProjet = localStorage.getItem('selectedProjet');
            if (savedProjet) {
                setProjet(JSON.parse(savedProjet));
            } else {
                navigate('/'); // s'il n'y a rien, on revient à l'accueil
            }
        }
    }, [projet, navigate]);

    if (!projet) return null;

    return (
        <>
            <Header />
            <div>
                <h1>{projet.titre}</h1>
                <p>{projet.description}</p>
            </div>
            <Footer />
        </>
    );
}

export default DetailProjet;
