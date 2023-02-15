// This is App.js, the file that pulls everything together and calls all pages created

import React from 'react';
import './App.css';
// Importing App.css here applies it to the entire project

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact />
       
        
        



      </Switch>
      
    </Router>

    
  );
}

export default App;

