import React from "react";
import PropTypes from "prop-types";
import styles from "./LogadoScreen.module.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const LogadoScreen = () => (
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

LogadoScreen.propTypes = {};

LogadoScreen.defaultProps = {};

export default LogadoScreen;
