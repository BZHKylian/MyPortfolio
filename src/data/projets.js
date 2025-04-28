const projets = {
  1: {
    "titre": "Jeu de Sudoku",
    "description": "Ce projet est un jeu de Sudoku entièrement codé en langage C, conçu pour fonctionner dans un terminal. Il permet de générer des grilles de Sudoku aléatoires, de les afficher de manière lisible dans une interface texte, et d’y jouer en entrant les chiffres au clavier. Ce projet m’a permis de renforcer ma maîtrise des structures de données.",
    "resume": "Jeu de Sudoku en C avec interface terminal, génération de grilles incluses.",
    "contexte": "Projet Universitaire",
    "groupe": null,
    "technologies": [
      {
        "id": 15,
        "description": "Langage principal utilisé pour la logique du jeu, la gestion de la grille et l’algorithme de backtracking."
      },
      {
        "id": 11,
        "description": "Utilisé pour versionner le code source et collaborer avec GitHub."
      }
    ],
    "outils": null,
    "imageResume": "/asset/img/projets/sudoku.gif",
    "lien_demo": null,
    "lien_github": "https://github.com/BZHKylian/Projet_sudoku",
    "date_debut": "2023-09",
    "date_fin": "2023-12",
    "status": "Terminé",
    "categorie": "Logiciel",
    "etapes": [
      {
        "nom": "Analyse du jeu",
        "description": "Compréhension des règles du Sudoku et identification des contraintes à implémenter dans le programme."
      },
      {
        "nom": "Conception des structures",
        "description": "Définition des structures de données (tableau 2D, vérification de validité, etc.) nécessaires à la gestion d’une grille."
      },
      {
        "nom": "Génération de grille",
        "description": "Implémentation d’un algorithme capable de créer des grilles de Sudoku partiellement remplies, jouables et valides."
      },
      {
        "nom": "Interface terminal",
        "description": "Développement d’une interface texte pour jouer au Sudoku dans le terminal, avec affichage clair et interaction clavier."
      },
      {
        "nom": "Résolution automatique",
        "description": "Ajout d’un solveur automatique utilisant un algorithme de backtracking pour tester et vérifier les grilles."
      },
      {
        "nom": "Documentation",
        "description": "Utilisation de Doxygen pour générer une documentation technique du code et faciliter sa maintenance."
      },
      {
        "nom": "Tests et débogage",
        "description": "Vérification du bon fonctionnement de toutes les fonctionnalités et correction des éventuelles erreurs."
      }
    ]
  },
  2: {
    "titre": "Pact (Site web dynamique)",
    "description": "Pact est un site web dynamique réalisé dans le cadre d’un projet universitaire de grande ampleur, s’étalant d’octobre 2024 à mars 2025, en collaboration avec cinq autres étudiants. L’objectif principal était de développer une plateforme permettant aux utilisateurs de consulter des offres proposées par des professionnels, publics comme privés, et de déposer des avis sur celles-ci.\n\nLe site propose un système complet de gestion de comptes, avec trois types d’utilisateurs : visiteurs, professionnels et administrateurs. Chaque professionnel peut publier des offres, recevoir des avis, et dispose de la possibilité de blacklister certains utilisateurs indésirables pour protéger ses annonces.\n\nUne double authentification a été mise en place pour renforcer la sécurité des connexions utilisateurs. L’interface du site est moderne, responsive, et l’application respecte les bonnes pratiques en matière de développement web (architecture MVC, sécurité des données, validations côté serveur et client).\n\nCe projet a permis de mettre en pratique des compétences variées : conception de base de données PostgreSQL, développement PHP/JavaScript, gestion de sessions, interface sécurisée, et travail d’équipe en méthode agile. J’ai participé activement à la création de l’architecture technique, au développement côté back-end, ainsi qu’à la mise en œuvre de la double authentification.",
    "resume": "Site de gestion d'avis clients sur des offres professionnelles, avec double authentification et système de blacklist.",
    "contexte": "Projet Universitaire",
    "groupe": 6,
    "technologies": [
      {
        "id": 3,
        "description": "HTML, CSS et JavaScript pour l’interface utilisateur responsive."
      },
      {
        "id": 19,
        "description": "HTML, CSS et JavaScript pour l’interface utilisateur responsive."
      },
      {
        "id": 17,
        "description": "HTML, CSS et JavaScript pour l’interface utilisateur responsive."
      },
      {
        "id": 5,
        "description": "Utilisé pour le développement back-end, gestion des sessions et des utilisateurs."
      },
      {
        "id": 11,
        "description": "Versionnage collaboratif du code avec GitHub."
      },
      {
        "id": 8,
        "description": "PostgreSQL pour la gestion de la base de données relationnelle."
      },
      {
        "id": 8,
        "description": "Jira"
      }
    ],
    "outils": null,
    "imageResume": "/asset/img/projets/pact.png",
    "lien_demo": null,
    "lien_github": "https://github.com/BZHKylian/Pact",
    "date_debut": "2024-10",
    "date_fin": "2025-03",
    "status": "Terminé",
    "categorie": "Web",
    "etapes": [
      {
        "nom": "Analyse des besoins",
        "description": "Identification des types d’utilisateurs et des fonctionnalités attendues."
      },
      {
        "nom": "Conception de l’architecture",
        "description": "Création du schéma de base de données, structure MVC et plan de développement."
      },
      {
        "nom": "Développement des fonctionnalités clés",
        "description": "Implémentation des comptes utilisateurs, publication d’offres, avis clients, blacklist, etc."
      },
      {
        "nom": "Sécurité",
        "description": "Mise en place de la double authentification, gestion des accès, protections CSRF/XSS."
      },
      {
        "nom": "Tests et validation",
        "description": "Recette technique, tests fonctionnels, et débogage."
      },
      {
        "nom": "Présentation et documentation",
        "description": "Création d’un support de présentation et documentation technique du projet."
      }
    ]
  },
  3: {
    "titre": "Tour du Cavalier",
    "description": "Ce projet a pour objectif de résoudre le problème du Tour du Cavalier sur un échiquier en utilisant deux méthodes : un algorithme classique de backtracking et la règle de Warnsdorff. Développé en Python avec une interface graphique Tkinter, le projet permet de visualiser les parcours en temps réel et de comparer l'efficacité des deux approches. Ce travail m’a permis de renforcer mes compétences en algorithmique, optimisation et développement d'interfaces graphiques.",
    "resume": "Comparaison d'algorithmes (backtracking et Warnsdorff) pour le Tour du Cavalier avec visualisation en Python (Tkinter).",
    "contexte": "Projet Universitaire",
    "groupe": 3,
    "technologies": [
      {
        "id": 14,
        "description": "Langage principal utilisé pour implémenter la logique des deux algorithmes et la gestion de l’échiquier."
      },
      {
        "id": 20,
        "description": "Bibliothèque utilisée pour créer l'interface graphique et visualiser en temps réel les déplacements du cavalier."
      },
      {
        "id": 11,
        "description": "Utilisé pour versionner le code source et collaborer avec GitHub."
      }
    ],
    "outils": null,
    "imageResume": "/asset/img/projets/cavalier.gif",
    "lien_demo": null,
    "lien_github": "https://github.com/BZHKylian/Tour_du_Cavalier",
    "date_debut": "2023-09",
    "date_fin": "2023-12",
    "status": "Terminé",
    "categorie": "Logiciel",
    "etapes": [
      {
        "nom": "Analyse du problème",
        "description": "Compréhension des règles du Tour du Cavalier et analyse des contraintes spécifiques pour la mise en œuvre des deux algorithmes."
      },
      {
        "nom": "Conception des algorithmes",
        "description": "Développement d’un algorithme de backtracking pour trouver une solution exhaustive et implémentation de la règle de Warnsdorff pour optimiser les déplacements."
      },
      {
        "nom": "Développement de l'interface",
        "description": "Création d'une interface graphique avec Tkinter permettant de choisir l'algorithme et de visualiser les déplacements du cavalier."
      },
      {
        "nom": "Comparaison des performances",
        "description": "Mise en place d’outils pour comparer le temps d'exécution et l'efficacité entre le backtracking et l'algorithme de Warnsdorff."
      },
      {
        "nom": "Tests et validation",
        "description": "Tests sur différentes tailles d’échiquiers pour valider la justesse des parcours et mesurer les performances respectives."
      },
      {
        "nom": "Documentation",
        "description": "Rédaction d'une documentation technique expliquant les choix algorithmiques, l'architecture du code et les résultats de la comparaison."
      }
    ]
  },
  4: {
    "titre": "Générateur de documentation",
    "description": "Ce projet vise à automatiser la création de documentation technique à partir de fichiers C. Grâce à des scripts PHP exécutés dans un environnement Docker, les données sont extraites, traitées, formatées en Markdown, puis converties en HTML et en PDF. Ce processus améliore la productivité et garantit une documentation précise et accessible.",
    "resume": "Automatisation de la génération de documentation technique depuis des fichiers C jusqu'au format PDF via PHP et Docker.",
    "contexte": "Projet Universitaire",
    "groupe": 3,
    "technologies": [
      { "id": 15, "description": "Utilisé pour stocker les algorithmes et données initiales dans des fichiers C." },
      { "id": 5, "description": "Utilisé pour l'extraction et le traitement des données ainsi que la génération de fichiers Markdown et HTML." },
      { "id": 3, "description": "Utilisé pour structurer la documentation en version web à partir du Markdown." },
      { "id": 21, "description": "Format de document léger pour structurer la documentation avant conversion." },
      { "id": 22, "description": "Format final imprimable généré depuis le HTML." },
      { "id": 9, "description": "Containerisation de l'environnement pour garantir une exécution cohérente et isolée des scripts." },
      { "id": 11, "description": "Utilisé pour versionner et partager le projet via GitHub." }
    ],
    "outils": null,
    "imageResume": "/asset/img/projets/doc_generator.gif",
    "lien_demo": null,
    "lien_github": "https://github.com/BZHKylian/Doc-Generator", 
    "date_debut": "2024-02",
    "date_fin": "2024-04",
    "status": "Terminé",
    "categorie": "Logiciel",
    "etapes": [
      {
        "nom": "Extraction des données",
        "description": "Analyse des fichiers C pour identifier et extraire les informations pertinentes (données, algorithmes)."
      },
      {
        "nom": "Traitement PHP",
        "description": "Développement de scripts PHP pour parser les fichiers C, structurer les données et générer un fichier Markdown."
      },
      {
        "nom": "Génération Markdown",
        "description": "Formatage des données extraites dans un document en syntaxe Markdown pour faciliter la lecture et la conversion."
      },
      {
        "nom": "Conversion HTML",
        "description": "Transformation du Markdown en HTML pour permettre une visualisation web de la documentation."
      },
      {
        "nom": "Conversion PDF",
        "description": "Création d'une version PDF depuis le HTML pour rendre la documentation imprimable et portable."
      },
      {
        "nom": "Tests et validation",
        "description": "Vérification de la cohérence et de la qualité de la documentation générée à chaque étape."
      }
    ]
  }
  
  
};

export default projets;
