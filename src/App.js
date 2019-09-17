import React from 'react';
import './App.css';

/* Component */
import HomeComponent from './pages/home/HomeComponent';
import Navbar from './components/navbar/NavbarComponent';
import ScoreboardComponent from './components/scoreboard/ScoreboardComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScoreboardComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
