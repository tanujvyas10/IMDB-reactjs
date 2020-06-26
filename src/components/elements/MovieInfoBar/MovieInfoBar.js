import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="imdb-movieinfobar">
    <div className="imdb-movieinfobar-content">
      <div className="imdb-movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="imdb-movieinfobar-info">Running time: {calcTime(time)}</span>
      </div>
      <div className="imdb-movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="imdb-movieinfobar-info">Budget: {convertMoney(budget)}</span>
      </div>
      <div className="imdb-movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="imdb-movieinfobar-info">Revenue: {convertMoney(revenue)}</span>
      </div>
    </div>
  </div>
)

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieInfoBar;