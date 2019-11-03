import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ text, icon, value, handleChange, field, type }) => (
  <div className={styles.InputField}>
    <img className={styles.icon} src={icon} alt="" />
    <input
      className={styles.input}
      type={type}
      placeholder={text}
      value={value}
      onChange={handleChange(field)}
    />
  </div>
);

InputField.propTypes = {};

InputField.defaultProps = {};

export default InputField;
