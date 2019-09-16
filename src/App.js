import React from 'react';
import './App.css';

/* Component */
import HomeComponent from './pages/home/HomeComponent';
import Loader from './components/ui/loader/LoaderComponent';
import Notification from './components/ui/notification/NotificationComponent';


function App() {
  return (
    <div className="App">
      <Loader />
      <Notification />
      <HomeComponent />
    </div>
  );
}

export default App;
