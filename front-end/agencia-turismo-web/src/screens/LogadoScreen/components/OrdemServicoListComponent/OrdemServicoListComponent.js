import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./OrdemServicoListComponent.module.css";
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";
import CircularProgress from "@material-ui/core/CircularProgress";

const OrdemServicoListComponent = ({ handleState, setTitle }) => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [state2, setState2] = React.useState({});
  const [httpStatus2, setHttpStatus2] = React.useState();
  const [loading2, setLoading2] = React.useState(true);
  const request = new Backend();

  const header1 = [
    "status",
    "idOrdemServico",
    "cliente",
    "fornecedor",
    "atendente",
    "data",
    "valor"
  ];

  const header2 = ["idDespesa", "data", "valor"];

  const getAllOrdemServicos = () => {
    request.get("/cadastro-ordem-servico").then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  };

  const getAllDespesas = () => {
    request.get("/cadastro-despesa").then(res => {
      setState2(res.data);
      setHttpStatus2(res.status);
      setLoading2(false);
    });
  };

  useEffect(() => {
    setTitle("Ordem Serviço");
    getAllOrdemServicos();
    getAllDespesas();
  }, []);

  const search = value => {
    setLoading(true);
    request
      .get("/cadastro-ordem-servico/filter-ordemServico?value=" + value)
      .then(res => {
        setState(res.data);
        setHttpStatus(res.status);
        setLoading(false);
      });
  };

  const search2 = value => {
    setLoading2(true);
    request.get("/cadastro-despesa/filter-despesa?value=" + value).then(res => {
      setState2(res.data);
      setHttpStatus2(res.status);
      setLoading2(false);
    });
  };

  return (
    <div className={styles.OrdemServicoListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent
            state={state}
            setState={setState}
            header={header1}
            search={search}
            cadastroScreen={"cadastro-ordem-servico"}
            handleState={handleState}
            haveAcoes={false}
            nome={"ordem de serviço"}
          />
        ) : (
          <div className={styles.erro}>
            <span>Erro ao obter dados! </span>
            <span>Tente novamente mais tarte...</span>
          </div>
        )
      ) : (
        <div className={styles.carregando}>
          <CircularProgress thickness={6} color="inherit" size={30} />
        </div>
      )}
      <br />
      <br />
      {!loading2 ? (
        httpStatus2 >= 200 || httpStatus2 < 300 ? (
          <TableComponent
            state={state2}
            setState={setState2}
            header={header2}
            search={search2}
            cadastroScreen={"cadastro-despesa"}
            handleState={handleState}
            haveAcoes={false}
            nome={"despesa"}
          />
        ) : (
          <div className={styles.erro}>
            <span>Erro ao obter dados! </span>
            <span>Tente novamente mais tarte...</span>
          </div>
        )
      ) : (
        <div className={styles.carregando}>
          <CircularProgress thickness={6} color="inherit" size={30} />
        </div>
      )}
    </div>
  );
};

OrdemServicoListComponent.propTypes = {};

OrdemServicoListComponent.defaultProps = {};

export default OrdemServicoListComponent;
