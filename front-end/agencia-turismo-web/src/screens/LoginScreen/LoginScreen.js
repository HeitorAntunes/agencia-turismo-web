import React from "react";
import styles from "./LoginScreen.module.css";
import InputField from "../../components/InputField/InputField";
import personIcon from "../../assets/person-24px.svg";
import passwordIcon from "../../assets/lock-24px.svg";
import flightIcon from "../../assets/aeroplane.svg";
import { withRouter } from "react-router-dom";
import Backend from "../../service/backend";

const LoginScreen = ({ history }) => {
  const [values, setValues] = React.useState({
    email: "",
    senha: ""
  });

  const request = new Backend();

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  const changeScreen = prop => {
    const value = {
      login: values.email,
      password: values.senha
    };

    request
      .post("/cadastro-user/login", value)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          wait(2000);
          history.push(prop);
        } else {
          alert(res.message);
        }
      })
      .catch(res => {
        debugger;
        alert(res.response.data.message);
      });
  };

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

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

        <button
          className={styles.button}
          onClick={() => changeScreen("logado")}
        >
          Entrar
        </button>
        <button
          className={styles.button}
          onClick={() => changeScreen("cadastro")}
        >
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
