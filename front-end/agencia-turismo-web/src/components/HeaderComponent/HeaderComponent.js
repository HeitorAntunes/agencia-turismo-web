import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderComponent.module.css";
import airplane from "../../assets/flight-24px.svg";
import user from "../../assets/person-24px.svg";

const HeaderComponent = () => (
  <div className={styles.HeaderComponent}>
    <div className={styles.cabecalho}>
      <div className={styles.icon}>
        <img className={styles.airplane} src={airplane}></img>
        <span className={styles.sisat}> SISAT </span>
      </div>

      <div className={styles.nome}>
        {" "}
        <img className={user} src={user}></img> <span>Heitor</span>
      </div>
    </div>
    <div>
      <div className={styles.menu}>
        <div className={styles.buttons}> INÍCIO</div>
        <div className={styles.buttons}> CLIENTES</div>
        <div className={styles.buttons}> FUNCIONÁRIOS </div>
        <div className={styles.buttons}> FORNECEDORES </div>
        <div className={styles.buttons}> ORDEM DE SERVIÇO </div>

        <div className={styles.buttons}> FINANCEIRO </div>
      </div>
    </div>
  </div>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
