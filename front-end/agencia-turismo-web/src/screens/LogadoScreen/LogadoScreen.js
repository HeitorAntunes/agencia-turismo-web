import React from "react";
import PropTypes from "prop-types";
import styles from "./LogadoScreen.module.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import CadastroGerenteComponent from "./components/CadastroGerenteComponent/CadastroGerenteComponent";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import {withRouter} from 'react-router'



const LogadoScreen = () => { let match = useRouteMatch();
  return (

  <div>
    <HeaderComponent> </HeaderComponent>
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.title}> CADASTRO </div>
        <div className={styles.secondBackground}>
        <Switch>
        <Route path={`${match.path}/gerente`}>
          <CadastroGerenteComponent/>
        </Route>
        </Switch>
        </div>
      </div>
    </div>
  </div>
); }

LogadoScreen.propTypes = {};

LogadoScreen.defaultProps = {};

export default withRouter(LogadoScreen);