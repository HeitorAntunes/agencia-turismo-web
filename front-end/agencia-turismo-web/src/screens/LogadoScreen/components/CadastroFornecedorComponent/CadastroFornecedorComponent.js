import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './CadastroFornecedorComponent.module.css';
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";

const CadastroFornecedorComponent = ({ setTitle }) => {
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

  const handleChange2 = () => event => {
    console.log(event.target.value);
  };

  useEffect(() => {
    setTitle("CADASTRO FORNECEDOR");
  }, []);

  const onSubmit = () => {
    const valor = {
      ...values,
      id: 0,
    };
    Backend(valor);
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

export default CadastroFornecedorComponent;
