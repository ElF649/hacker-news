import React from 'react';
import { Link, Route } from 'react-router-dom';
import arrow from '../../images/arrow.png';
import './Header.css';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link
        className="header__logo"
        navLink
        title="Перейти на страницу с поиском"
        to="/"
      >
        HackerNews
      </Link>
      <Route path="/story">
        <Link to="/" className="header__link-backward">
          <img src={arrow} alt="backward" />
          Назад
        </Link>
      </Route>
    </div>
  </header>
);
