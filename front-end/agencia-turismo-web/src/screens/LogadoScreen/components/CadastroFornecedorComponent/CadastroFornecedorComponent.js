import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CadastroFornecedorComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";
import { withRouter } from "react-router";

const CadastroFornecedorComponent = ({
  setTitle,
  history,
  state,
  handleState
}) => {
  const request = new Backend();
  const [isEdit, setEdit] = React.useState(false);

  const [values, setValues] = React.useState({
    nome: "",
    email: "",
    cnpj: "",
    telefone: "",
    endereco: "",
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
    setTitle("CADASTRO FORNECEDOR");
  }, []);

  useEffect(() => {
    if (state) {
      setEdit(true);
      setValues(state);
    }
  }, []);

  const onSubmit = () => {
    debugger;
    if (!isEdit) {
      const valor = {
        ...values,
        idFornecedor: 0,
        id: {
          id: 1
        }
      };
      request
        .createFornecedor(valor)
        .then(res => {
          alert("Fornecedor cadastrado com sucesso!!");
          history.push("/logado/fornecedor");
        })
        .catch(err => {
          alert("Erro ao cadastrar, tente novamente!");
        });
    } else {
      const valor = {
        ...values,
        idFornecedor: state.idFornecedor,
        id: {
          id: 1
        }
      };
      request
        .update("/cadastro-Fornecedor", valor)
        .then(res => {
          alert("Fornecedor editado com sucesso!!");
          history.push("/logado/fornecedor");
        })
        .catch(err => {
          alert("Erro ao editar, tente novamente!");
        });
    }
  };

  return (
    <div>
      <div className={styles.CadastroFornecedorComponent}>
        <span className={styles.nameField}>Nome Completo</span>
        <InputField
          text={"Exemplo: Heitor de Lima Antunes"}
          type="text"
          handleChange={handleChange}
          field={"nome"}
          value={values.nome}
        />

        <span className={styles.nameField}>E-mail</span>
        <InputField
          text={"Exemplo: heitor@gmail.com"}
          type="text"
          handleChange={handleChange}
          field={"email"}
          value={values.email}
        />

        <span className={styles.nameField}>CNPJ</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"cnpj"}
          value={values.cnpj}
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

CadastroFornecedorComponent.propTypes = {};

CadastroFornecedorComponent.defaultProps = {};

export default withRouter(CadastroFornecedorComponent);
