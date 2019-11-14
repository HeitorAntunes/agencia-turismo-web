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

const LogadoScreen = () => {
  let match = useRouteMatch();

  const [title, setTitle] = React.useState("");

  return (
    <div>
      <HeaderComponent> </HeaderComponent>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.title}> {title} </div>
          <div className={styles.secondBackground}>
            <Switch>
              <Route path={`${match.path}/cadastro-gerente`}>
                <CadastroGerenteComponent setTitle={setTitle} />
              </Route>
              <Route path={`${match.path}/cadastro-atendente`}>
                <CadastroAtendenteComponent setTitle={setTitle} />
              </Route>
              <Route path={`${match.path}/cadastro-fornecedor`}>
                <CadastroFornecedorComponent setTitle={setTitle} />
              </Route>
              <Route path={`${match.path}/cadastro-cliente`}>
                <CadastroClienteComponent setTitle={setTitle} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

LogadoScreen.propTypes = {};

LogadoScreen.defaultProps = {};

export default withRouter(LogadoScreen);
