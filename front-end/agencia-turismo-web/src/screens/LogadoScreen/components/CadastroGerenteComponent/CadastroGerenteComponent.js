import React, { useEffect } from "react";
import styles from "./CadastroGerenteComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";
import { withRouter} from "react-router";

const CadastroGerenteComponent = ({ setTitle, data, history }) => {

  const request = new Backend();

  const [values, setValues] = React.useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    endereco: "",
    data_nascimento: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const [speed, setSpeed] = React.useState("");

  

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    setTitle("CADASTRO GERENTE");
  }, []);

  const onSubmit = () => {
    const valor = {
      ...values,
      "id_gerente": 0,
      "id": {
        id: 1
      }
    };
    request.createGerente(valor)
    .then(res => {
      alert("Gerente cadastrado com sucesso!!");
      history.push("/logado/gerente");
    })
    .catch(err => {
      alert("Erro ao cadastrar, tente novamente!");
    });
  };

  return (
    <div>
      <div className={styles.CadastroGerenteComponent}>
        <span className={styles.nameField}>Nome Completo</span>
        <InputField
          text={"Exemplo: Heitor de Lima Antunes"}
          type="text"
          handleChange={handleChange}
          field={"nome"}
          value={values.nome}
        />

        <span className={styles.nameField}>Sexo</span>
        <select
          onChange={e => {
            setValues({ ...values, sexo: e.target.value });
          }}
        >
          <option defaultValue value=""></option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
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
          field={"telefone"}
          value={values.telefone}
        />
        <span className={styles.nameField}>Endereço</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"endereco"}
          value={values.endereco}
        />
        <span className={styles.nameField}>Data de Nascimento</span>
        <InputField
          text={"Colocar birthdate box"}
          type="text"
          handleChange={handleChange}
          field={"data_nascimento"}
          value={values.data_nascimento}
        />
        <span className={styles.nameField}>CEP</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cep"}
          value={values.cep}
        />
        <span className={styles.nameField}>Bairro</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"bairro"}
          value={values.bairro}
        />

        <span className={styles.nameField}>Estado</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"estado"}
          value={values.estado}
        />

        <span className={styles.nameField}>Cidade</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cidade"}
          value={values.cidade}
        />

        <button
          className={styles.button}
          onClick={onSubmit} /*onClick={changeScreen('logado')}*/
        >
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

export default withRouter (CadastroGerenteComponent);
