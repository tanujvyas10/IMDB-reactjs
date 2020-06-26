import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="imdb-header">
    <div className="imdb-header-content">
      <Link to="/">
        <img className="imdb-logo" src="/images/imdb.jpg" alt="imdb-logo" />
      </Link>
    </div>
  </div>
)

export default Header;