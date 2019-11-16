import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderTableComponent.module.css";

const HeaderTableComponent = ({
  header = ["id", "nome", "cpf", "setor", "ações"]
}) => {
  const listItems = header.map(item => <span className={styles.header} key={item} style={{ width: (1 / header.length) * 100 + "%" }}>{item.toLocaleUpperCase()}</span>);

  return <div className={styles.HeaderTableComponent}>{listItems}</div>;
};

HeaderTableComponent.propTypes = {};

HeaderTableComponent.defaultProps = {};

export default HeaderTableComponent;
