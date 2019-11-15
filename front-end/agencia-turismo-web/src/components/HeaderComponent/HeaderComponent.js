import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderComponent.module.css";
import airplane from "../../assets/flight-24px.svg";
import user from "../../assets/person-24px.svg";
import { withRouter } from "react-router";

const HeaderComponent = ({ history }) => {

  const onChangePage2 = (prop) => {
    history.push(prop);
  }

  return (
    <div className={styles.HeaderComponent}>
      <div className={styles.cabecalho}>
        <div className={styles.icon}>
          <img className={styles.airplane} src={airplane} alt=""></img>
          <span className={styles.sisat}> SISAT </span>
        </div>

        <div className={styles.nome}>
          {" "}
          <img className={user} src={user} alt=""></img> <span className={styles.span}>Heitor</span>
        </div>
      </div>
      <div>
        <div className={styles.menu}>
          <div className={styles.buttons}> INÍCIO</div>
          <div className={styles.buttons} onClick={() => onChangePage2("/logado/cadastro-cliente")}> CLIENTES</div>
          <div className={styles.buttons} onClick={() => onChangePage2("/logado/cadastro-atendente")}> FUNCIONÁRIOS </div>
          <div className={styles.buttons} onClick={() => onChangePage2("/logado/cadastro-fornecedor")}> FORNECEDORES </div>
          <div className={styles.buttons} onClick={() => onChangePage2("/logado/ordem-servico")}> ORDEM DE SERVIÇO </div>

          <div className={styles.buttons} onClick={() => onChangePage2("/logado/financeiro")}> FINANCEIRO </div>
        </div>
      </div>
    </div>
  );
};

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default withRouter(HeaderComponent);
