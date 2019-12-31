import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/layout/Navigation.js'
import Dashboard from './components/dashboard/Dashboard.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
