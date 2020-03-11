import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
