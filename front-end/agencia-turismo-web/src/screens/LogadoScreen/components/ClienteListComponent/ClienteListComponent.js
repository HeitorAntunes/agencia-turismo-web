import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ClienteListComponent.module.css";
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";

const ClienteListComponent = ({handleState}) => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const request = new Backend();

  const header = ["idCliente", "nome", "cpf", "ações"];

  const getAllClientes = () => {
    request.getCliente().then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAllClientes();
  }, []);

  const search = value => {
    setLoading(true);
    request.pesquisaCliente(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);    
    });
  };

  const deleteElement = value => {
    console.log(value)
    setLoading(true);
    request.delete("cadastro-cliente/" + value[header[0]]).then(res => {
      setLoading(false);
      getAllClientes();
    });
  };

  return (
    <div className={styles.ClienteListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent
            state={state}
            setState={setState}
            header={header}
            search={search}
            cadastroScreen={"cadastro-cliente"}
            deleteElement={deleteElement}
            handleState={handleState}
          />
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
