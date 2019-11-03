import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
