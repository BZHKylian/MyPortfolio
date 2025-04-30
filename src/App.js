import React, { lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import DelayedFallback from './components/DelayedSuspense'; // ← ajouté
import "./css/styles.css";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const DetailProjet = lazy(() => import('./pages/Projet'));

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/projet', element: <DetailProjet /> },
]);

function App() {
  return (
    <DelayedFallback fallback={<LoadingPage />} minDelay={1000}>
      <RouterProvider router={router} />
    </DelayedFallback>
  );
}

export default App;
