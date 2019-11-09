import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginScreen.module.css";
import InputField from "../../components/InputField/InputField";
import personIcon from "../../assets/person-24px.svg";
import passwordIcon from "../../assets/lock-24px.svg";
import flightIcon from "../../assets/aeroplane.svg";
import { withRouter } from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [values, setValues] = React.useState({
    email: "",
    senha: ""
  });

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  const changeScreen = prop => {
    history.push(prop);
  };

  return (
    <div className={styles.LoginScreen}>
      <div className={styles.icon}>
        <img src={flightIcon} alt="" />
      </div>
      <span className={styles.logoName}>SISAT</span>
      <div>
        <InputField
          text={"E-mail"}
          type="text"
          icon={personIcon}
          handleChange={handleChange}
          field={"email"}
          value={values.email}
        />
        <InputField
          text={"Senha"}
          type="password"
          icon={passwordIcon}
          handleChange={handleChange}
          field={"senha"}
          value={values.senha}
        />

        <button className={styles.button} onClick={changeScreen("logado")}>
          Entrar
        </button>
        <button className={styles.button} onClick={changeScreen("cadastro")}>
          Cadastre-se
        </button>
        <span className={styles.esqueceu}>Esqueceu sua senha?</span>
      </div>
    </div>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default withRouter(LoginScreen);
