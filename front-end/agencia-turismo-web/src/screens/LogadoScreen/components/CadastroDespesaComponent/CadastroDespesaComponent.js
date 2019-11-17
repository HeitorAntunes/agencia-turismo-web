import React, { useEffect } from "react";
import styles from "./CadastroDespesaComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";
import { withRouter } from "react-router";

const CadastroDespesaComponent = ({
  setTitle,
  data,
  history,
  state,
  handleState,
  user
}) => {
  const request = new Backend();


  const [values, setValues] = React.useState({
    data: "",
    valor: "R$ ",
    descricao: ""
  });

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    setTitle("CADASTRO DESPESA");
  }, []);

  const onSubmit = () => {
      const valor = {
        ...values,
        valor: Number(values.valor.replace(/\D/g, "")),
        idDespesa: 0
      };
      request
        .post("/cadastro-despesa", valor)
        .then(res => {
          debugger;
          alert("Despesa cadastrada com sucesso!!");
          history.push("/logado/ordem-servico");
        })
        .catch(err => {
          debugger;
          alert("Erro ao cadastrar, tente novamente!");
        });
  
  };

  return (
    <div>
      <div className={styles.CadastroClienteComponent}>
        <span className={styles.nameField}>Data</span>
        <InputField
          text={"Exemplo: 02/01/2019"}
          type="text"
          handleChange={handleChange}
          field={"data"}
          value={values.data}
        />

        <span className={styles.nameField}>Valor</span>
        <InputField
          text={"Exemplo: R$ 20,00"}
          type="text"
          handleChange={handleChange}
          field={"valor"}
          value={values.valor}
        />

        <span className={styles.nameField}>Descrição</span>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"descricao"}
          value={values.descricao}
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
CadastroDespesaComponent.propTypes = {};

CadastroDespesaComponent.defaultProps = {};

export default withRouter(CadastroDespesaComponent);
