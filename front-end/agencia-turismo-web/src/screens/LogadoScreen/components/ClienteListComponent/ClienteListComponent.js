import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ClienteListComponent.module.css';
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";

const ClienteListComponent = () => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const request = new Backend();

  const header = ["idCliente", "nome", "cpf", "ações"];

  useEffect(() => {
    request.getCliente().then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  }, []);

  const search = (value) => {
    setLoading(true);
    request.pesquisaCliente(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    })
  } 

  return (
    <div className={styles.ClienteListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent state={state} setState={setState} header={header} search={search} cadastroScreen={"cadastro-cliente"}/>
        ) : (
          <span>Erro</span>
        )
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
};

ClienteListComponent.propTypes = {};

ClienteListComponent.defaultProps = {};

export default ClienteListComponent;
