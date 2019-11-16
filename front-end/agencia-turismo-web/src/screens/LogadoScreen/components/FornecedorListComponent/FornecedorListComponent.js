import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./FornecedorListComponent.module.css";
import TableComponent from "../TableComponent/TableComponent";
import Backend from "../../../../service/backend";

const FornecedorListComponent = () => {
  const [state, setState] = React.useState({});
  const [httpStatus, setHttpStatus] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const request = new Backend();

  const header = ["idFornecedor", "nome", "cpf", "ações"];

  const getAllFornecedores = () => {
    request.getFornecedor().then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAllFornecedores();
  }, []);

  const search = value => {
    setLoading(true);
    request.pesquisaFornecedor(value).then(res => {
      setState(res.data);
      setHttpStatus(res.status);
      setLoading(false);    
    });
  };

  const deleteElement = value => {
    console.log(value)
    setLoading(true);
    request.delete("cadastro-fornecedor/" + value[header[0]]).then(res => {
      setLoading(false);
      getAllFornecedores();
    });
  };

  return (
    <div className={styles.FornecedorListComponent}>
      {!loading ? (
        httpStatus >= 200 || httpStatus < 300 ? (
          <TableComponent
            state={state}
            setState={setState}
            header={header}
            search={search}
            cadastroScreen={"cadastro-fornecedor"}
            deleteElement={deleteElement}
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

FornecedorListComponent.propTypes = {};

FornecedorListComponent.defaultProps = {};

export default FornecedorListComponent;
