import React from "react";
import PropTypes from "prop-types";
import styles from "./LogadoScreen.module.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { withRouter } from "react-router";
import CadastroGerenteComponent from "./components/CadastroGerenteComponent/CadastroGerenteComponent";
import CadastroAtendenteComponent from "./components/CadastroAtendenteComponent/CadastroAtendenteComponent";
import CadastroFornecedorComponent from "./components/CadastroFornecedorComponent/CadastroFornecedorComponent";
import CadastroClienteComponent from "./components/CadastroClienteComponent/CadastroClienteComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import FuncionarioListComponent from "./components/FuncionarioListComponent/FuncionarioListComponent";
import ClienteListComponent from "./components/ClienteListComponent/ClienteListComponent";
import FornecedorListComponent from "./components/FornecedorListComponent/FornecedorListComponent";

const LogadoScreen = () => {
  const [state, setState] = React.useState({});
  const [title, setTitle] = React.useState("");

  let match = useRouteMatch();

  const handleState = data => {
    setState(data);
  };

  return (
    <div>
      <HeaderComponent> </HeaderComponent>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.title}> {title} </div>
          <div className={styles.secondBackground}>
            <Switch>
              <Route exact path={`${match.path}`}>
                <HomeComponent setTitle={setTitle} />
              </Route>
              <Route path={`${match.path}/cadastro-gerente`}>
                <CadastroGerenteComponent
                  setTitle={setTitle}
                  state={state}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/cadastro-atendente`}>
                <CadastroAtendenteComponent
                  setTitle={setTitle}
                  state={state}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/cadastro-fornecedor`}>
                <CadastroFornecedorComponent
                  setTitle={setTitle}
                  state={state}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/cadastro-cliente`}>
                <CadastroClienteComponent
                  setTitle={setTitle}
                  state={state}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/atendente`}>
                <FuncionarioListComponent
                  setTitle={setTitle}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/cliente`}>
                <ClienteListComponent
                  setTitle={setTitle}
                  handleState={handleState}
                />
              </Route>
              <Route path={`${match.path}/fornecedor`}>
                <FornecedorListComponent
                  setTitle={setTitle}
                  handleState={handleState}
                />
              </Route>
            </Switch>
          </div>
          <div className={styles.title}></div>
          <div className={styles.title}></div>
        </div>
      </div>
    </div>
  );
};

LogadoScreen.propTypes = {};

LogadoScreen.defaultProps = {};

export default withRouter(LogadoScreen);
