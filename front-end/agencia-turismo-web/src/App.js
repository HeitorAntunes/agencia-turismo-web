import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import LogadoSreen from './screens/LogadoSreen/LogadoSreen';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/logado" component={LogadoSreen}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
