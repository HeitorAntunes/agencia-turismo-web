import React, {useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./CadastroGerenteComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import LogadoScreen from "../../LogadoScreen";

const CadastroGerenteComponent = ({setTitle}) => {
  const [values, setValues] = React.useState({
    nome: "",
    senha: ""
  });

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    setTitle("CADASTRO GERENTE");
  }, []);

  return (
    <div>
      <div className={styles.CadastroGerenteComponent}>
        <span className={styles.nameField}>Nome</span>
        <InputField
          text={"Exemplo: Heitor"}
          type="text"
          handleChange={handleChange}
          field={"name"}
          value={values.name}
        />
        <span className={styles.nameField}>Sobrenome</span>
        <InputField
          text={"Antunes"}
          type="text"
          handleChange={handleChange}
          field={"lastname"}
          value={values.lastname}
        />

        <span className={styles.nameField}>Sexo</span>
        <select>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option selected value=""></option>
        </select>
        <br></br>

        <span className={styles.nameField}>E-mail</span>
        <InputField
          text={"Exemplo: heitor@gmail.com"}
          type="text"
          handleChange={handleChange}
          field={"email"}
          value={values.email}
        />
        <span className={styles.nameField}>Senha</span>
        <InputField
          text={"Senha"}
          type="password"
          handleChange={handleChange}
          field={"senha"}
          value={values.senha}
        />
        <span className={styles.nameField}>CPF</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cpf"}
          value={values.cpf}
        />
        <span className={styles.nameField}>Telefone</span>
        <InputField
          text={"Exemplo: (99) 9999-9999"}
          type="text"
          handleChange={handleChange}
          field={"phone"}
          value={values.phone}
        />
        <span className={styles.nameField}>Endereço</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"address"}
          value={values.address}
        />
        <span className={styles.nameField}>Data de Nascimento</span>
        <InputField
          text={"Colocar birthdate box"}
          type="text"
          handleChange={handleChange}
          field={"birth"}
          value={values.birth}
        />
        <span className={styles.nameField}>CEP</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cep"}
          value={values.cep}
        />
        <span className={styles.nameField}>Cidade</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cidade"}
          value={values.cidade}
        />

        <button className={styles.button} /*onClick={changeScreen('logado')}*/>
          SALVAR
        </button>
        <button
          className={styles.button} /*onClick={changeScreen('cadastro')}*/
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
};

CadastroGerenteComponent.propTypes = {};

CadastroGerenteComponent.defaultProps = {};

export default CadastroGerenteComponent;
