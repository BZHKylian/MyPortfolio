// src/componant/Header.js
import React from 'react';
import logo from "../asset/img/kh.png";
import { strNoAccent } from '../utils/strNoAccent';

function Header({ project }) {
    return (
        <header>
            <nav>
                <a href="/" className="logo">
                    <img src={logo} alt="Kylian Houedec Logo" />
                </a>
                <ul>
                    <li><a href="/">À propos</a></li>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
                <div className="menu-toggle">☰</div>
            </nav>
            {project ? (
                <p className={`${strNoAccent(project.status).toLowerCase()} projectStatus`}>
                    {project.status}
                </p>
            ) : null}
        </header>
    );
}

export default Header;
