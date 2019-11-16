import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./FuncionarioListComponent.module.css";
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";

const FuncionarioListComponent = () => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const request = new Backend();

  const header = ["idAtendente", "nome", "cpf", "ações"];

  useEffect(() => {
    request.getAtendente().then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  }, []);

  const search = value => {
    setLoading(true);
    request.pesquisaAtendente(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);    
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
          />
        ) : (
          <span>Deu ruim</span>
        )
      ) : (
        <span>carregando</span>
      )}
    </div>
  );
};

FuncionarioListComponent.propTypes = {};

FuncionarioListComponent.defaultProps = {};

export default FuncionarioListComponent;
