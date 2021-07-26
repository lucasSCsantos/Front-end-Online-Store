import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
