import React from "react";
import PropTypes from "prop-types";
import styles from "./LineComponent.module.css";
import DeleteIcon from "../../../../assets/delete-24px.svg";
import EditIcon from "../../../../assets/edit-24px.svg";
import { withRouter } from "react-router";
import cancelIcon from "../../../../assets/cancel-24px.svg";
import checkIcon from "../../../../assets/check_circle-24px.svg";
import removeIcon from "../../../../assets/remove_circle-24px.svg";

const LineComponent = ({
  items,
  header,
  history,
  cadastroScreen,
  deleteElement,
  handleState,
  haveAcoes = true
}) => {
  const listItems = () => {
    return header.map(item => {
      debugger;
      if (
        item.toLocaleUpperCase() === "CLIENTE" ||
        item.toLocaleUpperCase() === "FORNECEDOR" ||
        item.toLocaleUpperCase() === "ATENDENTE"
      ) {
        return (
          <div
            className={styles.content}
            style={{ width: (1 / header.length) * 100 + "%" }}
          >
            {items[item].nome}
          </div>
        );
      }
      if (item.toLocaleUpperCase() === "STATUS") {
        if (items[item] === "CF") {
          return (
            <img
              style={{ width: (1 / header.length) * 100 + "%" }}
              className={styles.iconStatus}
              src={checkIcon}
              alt="Confirmado"
            />
          );
        }
        if (items[item] === "CA") {
          return (
            <img
              style={{ width: (1 / header.length) * 100 + "%" }}
              className={styles.iconStatus}
              src={cancelIcon}
              alt="Cancelado"
            />
          );
        }
        if (items[item] === "P") {
          return (
            <img
              style={{ width: (1 / header.length) * 100 + "%" }}
              className={styles.iconStatus}
              src={removeIcon}
              alt="Pendente"
            />
          );
        }
      }
      if (item.toLocaleUpperCase() !== "AÇÕES") {
        return (
          <div
            className={styles.content}
            style={{ width: (1 / header.length) * 100 + "%" }}
          >
            {items[item]}
          </div>
        );
      }
      return null;
    });
  };

  const changePage = path => {
    handleState(items);
    history.push(path);
  };

  return (
    <div className={styles.LineComponent}>
      {listItems()}
      {haveAcoes && (
        <div
          className={styles.icons}
          style={{ width: (1 / header.length) * 100 + "%" }}
        >
          <img
            className={styles.icon}
            src={EditIcon}
            alt=""
            onClick={() => changePage(cadastroScreen)}
          />
          <img
            className={styles.icon}
            src={DeleteIcon}
            alt=""
            onClick={() => deleteElement(items)}
          />
        </div>
      )}
    </div>
  );
};

LineComponent.propTypes = {};

LineComponent.defaultProps = {};

export default withRouter(LineComponent);
