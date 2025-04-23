import React, { useState, useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LoadingPage from './components/LoadingPage'; // Page de chargement
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import "./css/styles.css"

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  }
]);

function App() {
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement

  // Utiliser useEffect pour gérer le délai avant de charger le contenu
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Changer l'état après 2.5 secondes
    }, 2500);

    // Nettoyage du timeout pour éviter des erreurs si le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  // Si la page est en train de charger, afficher la page de chargement
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <RouterProvider router={router} />
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#282c34',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  link: {
    color: '#fff',
    margin: '0 20px',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
