import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./FuncionarioListComponent.module.css";
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";
import CircularProgress from "@material-ui/core/CircularProgress";

const FuncionarioListComponent = ({ handleState, setTitle }) => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const request = new Backend();

  const header = ["idAtendente", "nome", "cpf", "ações"];

  const getAllAtendentes = () => {
    request.getAtendente().then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  };

  useEffect(() => {
    setTitle("Funcionários")
    getAllAtendentes();
  }, []);

  const search = value => {
    setLoading(true);
    request.pesquisaAtendente(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  };

  const deleteElement = value => {
    console.log(value);
    setLoading(true);
    request.delete("cadastro-atendente/" + value[header[0]]).then(res => {
      getAllAtendentes();
    });
  };

  return (
    <div className={styles.FuncionarioListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent
            state={state}
            setState={setState}
            header={header}
            search={search}
            cadastroScreen={"cadastro-atendente"}
            deleteElement={deleteElement}
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

FuncionarioListComponent.propTypes = {};

FuncionarioListComponent.defaultProps = {};

export default FuncionarioListComponent;
