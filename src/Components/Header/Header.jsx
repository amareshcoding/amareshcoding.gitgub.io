import React, { useEffect } from 'react';
import { useState } from 'react';
import LOGO from '../../assets/logo22.png';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [font, setFont] = useState('var(--body-color)');

  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setnavColor('#FFFFFF');
      setFont('var(--title-color-light');
    } else {
      setnavColor('transparent');
      setFont('var(--body-color)');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <header
      className="header"
      style={{ backgroundColor: navColor, color: font }}
    >
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={LOGO} alt="" width="30%" />
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={
                  activeNav === '#projects'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i class="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#github"
                onClick={() => setActiveNav('#github')}
                className={
                  activeNav === '#github'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i class="uil uil-scenery nav__icon"></i>Github
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i class="uil uil-scenery nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item"></li>
            {/*  */}
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
