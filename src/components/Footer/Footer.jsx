import React from 'react';
import './Footer.css';
import gitIcon from '../../images/git.svg';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__links">
        <ul className="footer__list footer__list-menu">
          <li className="footer__item footer__item_menu-link">
            <a
              title="Перейти на Главную"
              className="footer__link"
              href="/"
            >
              Главная
            </a>
          </li>
        </ul>
        <ul className="footer__list footer__list-social-web">
          <li className="footer__item footer__item_social-link">
            <a
              className="footer__link"
              href="https://github.com/ElF649"
            >
              <img src={gitIcon} alt="github" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">© 2020 Powered by Hacker News API</p>
    </div>
  </footer>
);
