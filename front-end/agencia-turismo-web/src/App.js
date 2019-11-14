import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import LogadoScreen from "./screens/LogadoScreen/LogadoScreen";
import CadastroScreen from "./screens/CadastroScreen/CadastroScreen";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/logado" component={LogadoScreen} />
          <Route path="/cadastro" component={CadastroScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
