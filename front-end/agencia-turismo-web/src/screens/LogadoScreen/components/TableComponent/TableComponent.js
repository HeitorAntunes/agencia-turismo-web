import React from "react";
import PropTypes from "prop-types";
import styles from "./TableComponent.module.css";
import SearchComponent from "../SearchComponent/SearchComponent";
import HeaderTableComponent from "../HeaderTableComponent/HeaderTableComponent";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import ContentComponent from "../ContentComponent/ContentComponent";

const TableComponent = ({
  state,
  setState,
  header,
  search,
  cadastroScreen,
  deleteElement,
  handleState,
  haveAcoes
}) => {
  return (
    <div className={styles.TableComponent}>
      <SearchComponent
        search={search}
        cadastroScreen={cadastroScreen}
        handleState={handleState}
      ></SearchComponent>

      {state === "" ? (
        <span className={styles.vazio}>Não há resultados</span>
      ) : (
        <div>
          <HeaderTableComponent
            state={state}
            setState={setState}
            header={header}
          ></HeaderTableComponent>
          <ContentComponent
            state={state.content}
            header={header}
            cadastroScreen={cadastroScreen}
            deleteElement={deleteElement}
            handleState={handleState}
            haveAcoes={haveAcoes}
          ></ContentComponent>
        </div>
      )}

      {/* <PaginationComponent></PaginationComponent> */}
    </div>
  );
};

TableComponent.propTypes = {};

TableComponent.defaultProps = {};

export default TableComponent;
