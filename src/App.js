import React from 'react';
import './App.css';

/* Component */
import HomeComponent from './pages/home/HomeComponent';
import Loader from './components/ui/loader/LoaderComponent';
import Notification from './components/ui/notification/NotificationComponent';
import Navbar from './components/navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Loader />
      <Notification />
      <HomeComponent />
    </div>
  );
}

export default App;
