import React from 'react';
import './App.css';

/* Component */
import HomeComponent from './pages/home/HomeComponent';
import ScoreboardComponent from './components/scoreboard/ScoreboardComponent';

function App() {
  return (
    <div className="App">
      <ScoreboardComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
