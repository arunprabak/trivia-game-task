import React from 'react';

const Navbar = ({ resetData }) => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-start">
      <h1 className="is-size-3">Trivia Game</h1>
    </div>
    <div className="navbar-start">
      <h4 className="is-size-3" onClick={() => resetData()}>
        Reset
      </h4>
    </div>
  </nav>
);

export default Navbar;
