import React from "react";
import PropTypes from "prop-types";
import styles from "./CadastroScreen.module.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const CadastroScreen = () => (
  <div>
    <HeaderComponent> </HeaderComponent>
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.title}> CADASTRO </div>
        <div className={styles.secondBackground}> </div>
      </div>
    </div>
  </div>
);

CadastroScreen.propTypes = {};

CadastroScreen.defaultProps = {};

export default CadastroScreen;
