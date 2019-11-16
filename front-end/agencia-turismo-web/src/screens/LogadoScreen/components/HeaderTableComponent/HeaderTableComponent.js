import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderTableComponent.module.css";

const HeaderTableComponent = ({
  header = ["id", "nome", "cpf", "setor", "ações"]
}) => {
  const listItems = header.map(item => <span key={item}>{item.toLocaleUpperCase()}</span>);

  return <div className={styles.HeaderTableComponent}>{listItems}</div>;
};

HeaderTableComponent.propTypes = {};

HeaderTableComponent.defaultProps = {};

export default HeaderTableComponent;
