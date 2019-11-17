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
  const request = new Backend();

  const header = ["status", "idOrdemServico", "cliente", "valor"];

  const getAllOrdemServicos = () => {
    request.get("/cadastro-ordem-servico").then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  };

  useEffect(() => {
    setTitle("Ordem Serviço");
    getAllOrdemServicos();
  }, []);

  const search = value => {
    setLoading(true);
    request.pesquisaOrdemServico(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  };

  return (
    <div className={styles.OrdemServicoListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent
            state={state}
            setState={setState}
            header={header}
            search={search}
            cadastroScreen={"cadastro-ordem-servico"}
            handleState={handleState}
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
