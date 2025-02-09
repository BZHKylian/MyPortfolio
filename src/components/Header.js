// src/componant/Header.js
import React from 'react';
import '../css/header/Header.css';
import logo from "../asset/img/kh.png";

function Header() {
    return (
        <header>
            <nav>
                <a href="#" className="logo">
                    <img src={logo} alt="Kylian Houedec Logo" />
                </a>
                <ul>
                    <li><a href="#/about">À propos</a></li>
                    <li><a href="#/">Portfolio</a></li>
                    <li><a href="#/">Contact</a></li>
                </ul>
                <div className="menu-toggle">☰</div>
            </nav>
        </header>
    );
}

export default Header;
