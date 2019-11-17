import React, { useEffect } from "react";
import styles from "./CadastroAtendenteComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";
import { withRouter } from "react-router";

const CadastroAtendenteComponent = ({
  setTitle,
  data,
  history,
  state,
  handleState,
  user
}) => {
  const request = new Backend();
  const [isEdit, setEdit] = React.useState(false);

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
    setTitle("CADASTRO ATENDENTE");
  }, []);

  useEffect(() => {
    if (state.nome) {
      setValues(state);
      setEdit(true);
    }
  }, []);

  const onSubmit = () => {
    if (!isEdit) {
      const valor = {
        ...values,
        idAtendente: 0,
        id: {
          id: user
        }
      };
      request
        .createAtendente(valor)
        .then(res => {
          alert("Atendente cadastrado com sucesso!!");
          history.push("/logado/atendente");
        })
        .catch(err => {
          alert("Erro ao cadastrar, tente novamente!");
        });
    } else {
      const valor = {
        ...values,
        idAtendente: state.idAtendente,
        id: {
          id: user
        }
      };
      request
        .update("/cadastro-atendente", valor)
        .then(res => {
          alert("Atendente editado com sucesso!!");
          history.push("/logado/atendente");
        })
        .catch(err => {
          alert("Erro ao editar, tente novamente!");
        });
    }
  };

  return (
    <div>
      <div className={styles.CadastroAtendenteComponent}>
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

CadastroAtendenteComponent.propTypes = {};

CadastroAtendenteComponent.defaultProps = {};

export default withRouter(CadastroAtendenteComponent);
