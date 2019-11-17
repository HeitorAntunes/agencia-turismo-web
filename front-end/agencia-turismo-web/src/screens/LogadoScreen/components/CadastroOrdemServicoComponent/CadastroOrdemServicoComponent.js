import React, { useEffect } from "react";
import styles from "./CadastroOrdemServicoComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import Backend from "../../../../service/backend";
import { withRouter } from "react-router";

const CadastroOrdemServicoComponent = ({
  setTitle,
  data,
  history,
  state,
  handleState
}) => {
  const request = new Backend();

  const [values, setValues] = React.useState({
    cliente: "",
    descricao: "",
    valor: "R$ ",
    status: ""
  });

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    setTitle("CADASTRO ORDEM SERVIÇO");
  }, []);

  const onSubmit = () => {
    const valor = {
      ...values,
      idOrdemServico: 0
    };
    request
      .post("/cadastro-ordem-servico", valor)
      .then(res => {
        alert("OrdemServico cadastrado com sucesso!!");
        history.push("/logado/ordemServico");
      })
      .catch(err => {
        alert("Erro ao cadastrar, tente novamente!");
      });
  };

  return (
    <div>
      <span className={styles.nameField}>Cliente</span>
      <select
        onChange={e => {
          setValues({ ...values, cliente: e.target.value });
        }}
      >
        <option defaultValue value=""></option>
        <option value="M">Heitor</option>
        <option value="F">Matheus</option>
      </select>
      <br></br>

      <span className={styles.nameField}>Status</span>
      <select
        onChange={e => {
          setValues({ ...values, status: e.target.value });
        }}
      >
        <option defaultValue value=""></option>
        <option value="CF">Confirmada</option>
        <option value="P">Pendente</option>
        <option value="CA">Cancelada</option>
      </select>
      <br></br>

      <span className={styles.nameField}>Descrição</span>
      <div className={styles.descricao}>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"descricao"}
          value={values.descricao}
        />
      </div>

      <span className={styles.nameField}>Valor</span>
      <div className={styles.valor}>
        <InputField
          text={""}
          type="text"
          handleChange={handleChange}
          field={"valor"}
          value={values.valor}
        />
      </div>

      <button
        className={styles.button}
        onClick={onSubmit} /*onClick={changeScreen('logado')}*/
      >
        SALVAR
      </button>
      <button className={styles.button} /*onClick={changeScreen('cadastro')}*/>
        CANCELAR
      </button>
    </div>
  );
};

CadastroOrdemServicoComponent.propTypes = {};

CadastroOrdemServicoComponent.defaultProps = {};

export default withRouter(CadastroOrdemServicoComponent);
