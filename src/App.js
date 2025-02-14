import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import "./css/styles.css"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
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
