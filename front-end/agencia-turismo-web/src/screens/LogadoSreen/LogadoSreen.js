import React from "react";
import PropTypes from "prop-types";
import styles from "./LogadoSreen.module.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const LogadoSreen = () => (
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

LogadoSreen.propTypes = {};

LogadoSreen.defaultProps = {};

export default LogadoSreen;
