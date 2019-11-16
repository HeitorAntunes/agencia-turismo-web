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
  cadastroScreen
}) => {
  return (
    <div className={styles.TableComponent}>
      <SearchComponent
        search={search}
        cadastroScreen={cadastroScreen}
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
