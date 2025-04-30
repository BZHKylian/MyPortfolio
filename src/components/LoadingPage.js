import React, { useEffect, useState } from "react";
import logo from '../asset/img/kh.png'; // Assure-toi que le chemin est correct

const LoadingPage = () => {
  const loadingQuotes = [
    "Optimisation du talent en cours… veuillez patienter.",
    "Chargement du portfolio… parce que même les meilleurs projets prennent un peu de temps.",
    "Compilation de génie créatif. Veuillez ne pas paniquer.",
    "Élimination des derniers bugs visibles. Les invisibles restent en paix.",
    "Minification du talent... ça prend de la place, le génie.",
    "Chargement plus lent que le Wi-Fi de la BU, mais plus utile.",
    "Initialisation des compétences... prêt à impressionner dans 3… 2… 1…",
    "Retouche finale des pixels… parce que le détail, ça compte.",
    "Mise en forme du CV en mode ninja. Ne clignez pas des yeux.",
    "Compilation de projets brillants. Mettez vos lunettes de soleil.",
    "Chargement du contenu... 100 % fait maison, sans frameworks surgelés.",
    "Portfolio en train de se déployer... dockerisez votre patience.",
    "Recherche d’un recruteur stylé... peut-être que c’est vous ?",
    "Préparation du jonglage entre front, back et caféine.",
    "Authentification du style… accréditation créative en cours.",
    "Synchronisation des pixels... veuillez rester immobile.",
    "Lancement des scripts d’autopromotion…",
    "Chargement propulsé par café et bonne volonté.",
    "Détection d’un utilisateur cool… accès en cours.",
    "Réduction du stress du dev... ça peut prendre un moment.",
    "Insertion de fun dans le code...",
    "Connexion à l’API de la créativité.",
    "Chargement en cours... votre patience est compilée.",
    "Initialisation du bon goût en design.",
    "Calcul du taux de satisfaction à la fin du portfolio...",
    "Vérification du niveau d'humour... 100%",
    "Validation des soft skills… c’est plus long que prévu.",
    "Affûtage des pixels… presque là.",
    "Chargement du CSS avec amour.",
    "On lance les animations en douceur…",
    "Génération de punchlines pour l’entretien.",
    "Recherche de projets incroyables… trouvés !",
    "Assemblage de projets… ne touchez à rien.",
    "Mise à jour de mes compétences : toujours plus frais.",
    "Remplissage du portfolio avec un zeste de génie.",
    "Activation de la magie du code.",
    "Importation de l'humour depuis 'me.js'",
    "Préparation mentale à vos clics.",
    "Chargement plus rapide qu'un `npm install` sur une mauvaise connexion.",
    "Création de lien entre vous et mes compétences...",
    "Mise en orbite des idées brillantes...",
    "Initialisation des composants React… ou pas.",
    "Préchargement de créativité en haute définition.",
    "Recherche de la balise <talent>...",
    "Compilation des `props` de motivation.",
    "Debug du stress de l'entretien technique.",
    "Génération automatique de charisme...",
    "Nettoyage des erreurs 404 personnelles.",
    "Configuration du mode 'impressionner le recruteur'.",
    "Optimisation SEO de votre bonne humeur.",
    "Importation de design responsive et réactif.",
    "Connexion au cloud de la créativité.",
    "Échauffement des neurones JavaScript.",
    "Mise en cache de bonnes pratiques.",
    "Préparation des commits élégants.",
    "Initialisation du dépôt de confiance.",
    "Ajout de valeur... merci de patienter.",
    "Chargement des projets les plus stylés.",
    "Analyse de vos attentes… on vise juste.",
    "Compilation sans warning… enfin, presque.",
    "Prise de contact avec l’inspiration.",
    "Fusion des branches d’idées brillantes.",
    "Synchronisation avec le backend du style.",
    "Montée en compétence express… ou presque.",
    "Ajout d'une touche de swag dans le HTML.",
    "Mise en production de ma personnalité.",
    "Simulation d’un effet wow en cours…",
    "Lancement de la fusée portfolio… 3, 2, 1...",
    "Chargement alimenté par Node.js et Nutella.",
    "Démarrage des modules d’originalité.",
    "Initialisation du système anti-boring.",
    "Préparation du style… à la ligne près.",
    "Connexion à ma base de passion.",
    "Configuration du serveur de motivation.",
    "Chargement des lignes de code affectueuses.",
    "Pré-traitement des pixels curieux.",
    "Création dynamique de crédibilité.",
    "Enrichissement de votre expérience utilisateur.",
    "Hydratation du DOM émotionnel.",
    "Mise en cache de mes meilleurs projets.",
    "Pré-lancement du mode dark si vous êtes stylé.",
    "Compilation des vibes professionnelles.",
    "Importation des soft skills… avec humour.",
    "Préparation des effets CSS : boom imminent.",
    "Démarrage du moteur à idées.",
    "Test de compatibilité entre votre curiosité et mon talent.",
    "Génération de JavaScript émotionnel.",
    "Installation des dépendances créatives.",
    "Optimisation du code de première impression.",
    "Préparation du terrain pour le scroll infini de talent.",
    "Chargement du style, des compétences, et d'un peu de fun.",
    "Activation des animations qui font 'wow'.",
    "Synchronisation du swag avec le navigateur.",
    "Préparation mentale à la performance maximale.",
    "Debug intensif de l’égo… tout est stable.",
    "Ajout de transitions douces pour une navigation zen.",
    "Réveil du codeur intérieur… mission portfolio.",
    "Compilation du charisme avec Webpack.",
    "Connexion au service de blagues intégrées.",
    "Préparation d’une UX savoureuse.",
    "Initialisation de la magie pixel-perfect.",
    "Chargement propulsé par passion et React.",
    "Votre curiosité alimente notre processeur.",
    "Exécution du script de séduction professionnelle.",
    "Réalisation d’un build unique… pour vous."
  ];

  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * loadingQuotes.length));

  useEffect(() => {
    const interval = setInterval(() => {
      const next = Math.floor(Math.random() * loadingQuotes.length);
      setQuoteIndex(next);
    }, 3000);

    return () => clearInterval(interval); // clean-up
  }, []);
  


  return (
    <div className="loading-container">
      <div className="loading-circle">
        <img src={logo} alt="Logo" className="loading-logo" />
      </div>
      <p className="quote">{loadingQuotes[quoteIndex]}</p>
    </div>
  );
};

export default LoadingPage;
