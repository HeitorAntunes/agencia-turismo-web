import React from "react";
import PropTypes from "prop-types";
import styles from "./LineComponent.module.css";
import DeleteIcon from "../../../../assets/delete-24px.svg";
import EditIcon from "../../../../assets/edit-24px.svg";
import { withRouter } from "react-router";

const LineComponent = ({ items, header, history, cadastroScreen }) => {
  const listItems = () => {
    return header.map(item => {
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
    history.push(path);
  };

  return (
    <div className={styles.LineComponent}>
      {listItems()}
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
        <img className={styles.icon} src={DeleteIcon} alt="" />
      </div>
    </div>
  );
};

LineComponent.propTypes = {};

LineComponent.defaultProps = {};

export default withRouter(LineComponent);
