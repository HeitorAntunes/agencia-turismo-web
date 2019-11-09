import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import LogadoScreen from './screens/LogadoScreen/LogadoScreen';
import CadastroScreen from "./screens/CadastroScreen/CadastroScreen";
import CadastroGerenteComponent from './screens/LogadoScreen/components/CadastroGerenteComponent/CadastroGerenteComponent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/logado" component={LogadoScreen}/>
          <Route path="/cadastro" component={CadastroScreen}/>
          <Route path="/cadastroTestGerente" component={CadastroGerenteComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
