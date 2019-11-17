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
    cliente: {
      idCliente: 1
    },
    atendente: {
      idAtendente: 1
    },
    fornecedor: {
      idFornecedor: 1
    },
    descricao: "",
    valor: "R$ ",
    status: ""
  });

  const [atendente, setAtendente] = React.useState({});
  const [cliente, setCliente] = React.useState({});
  const [fornecedor, setFornecedor] = React.useState({});

  const handleChange = prop => event => {
    console.log(values);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    request.get("/cadastro-atendente").then(res => {
      setAtendente(res.data);
    });
  }, []);

  useEffect(() => {
    request.get("/cadastro-cliente").then(res => {
      setCliente(res.data);
    });
  }, []);

  useEffect(() => {
    request.get("/cadastro-fornecedor").then(res => {
      setFornecedor(res.data);
    });
  }, []);

  useEffect(() => {
    setTitle("CADASTRO ORDEM SERVIÇO");
  }, []);

  const onSubmit = () => {
    const valor = {
      ...values,
      valor: Number(values.valor.replace(/\D/g, "")),
      idOrdemServico: 0
    };
    request
      .post("/cadastro-ordem-servico", valor)
      .then(res => {
        alert("OrdemServico cadastrado com sucesso!!");
        history.push("/logado/ordem-servico");
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
          setValues({ ...values, cliente: { idCliente: e.target.value } });
        }}
      >
        <option>Selecione um cliente</option>
        {cliente.content &&
          cliente.content.map(item => (
            <option key={item.idCliente} value={item.idCliente}>
              {item.nome}
            </option>
          ))}
      </select>
      <br></br>

      <span className={styles.nameField}>Atendente</span>
      <select
        onChange={e => {
          setValues({ ...values, atendente: { idAtendente: e.target.value } });
        }}
      >
        <option>Selecione um atendente</option>
        {atendente.content &&
          atendente.content.map(item => (
            <option key={item.idAtendente} value={item.idAtendente}>
              {item.nome}
            </option>
          ))}
      </select>
      <br></br>

      <span className={styles.nameField}>Fornecedor</span>
      <select
        onChange={e => {
          setValues({
            ...values,
            fornecedor: { idFornecedor: e.target.value }
          });
        }}
      >
        <option>Selecione um fornecedor</option>
        {fornecedor.content &&
          fornecedor.content.map(item => (
            <option key={item.idFornecedor} value={item.idFornecedor}>
              {item.nome}
            </option>
          ))}
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
