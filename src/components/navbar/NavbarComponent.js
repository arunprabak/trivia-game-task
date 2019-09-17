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
    <div className="navbar-end">
      <div className="navbar-item">
        <button className="button na" onClick={() => resetData()}>
          Reset
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
