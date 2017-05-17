
import React from 'react';
import {Link} from 'react-router-dom';

export default ({}, {location}) => <div>
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a href="#" className="navbar-brand">Sci-Hub</a>
        <span className="navbar-text text-uppercase">(Under Heavy Development and subject to change)</span>
      </div>

      <div className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  </nav>
</div>;

