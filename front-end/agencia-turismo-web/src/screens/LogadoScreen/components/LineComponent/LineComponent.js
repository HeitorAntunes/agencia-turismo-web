import React from "react";
import PropTypes from "prop-types";
import styles from "./LineComponent.module.css";
import DeleteIcon from "../../../../assets/delete-24px.svg";
import EditIcon from "../../../../assets/edit-24px.svg";
import { withRouter } from "react-router";


const LineComponent = ({ items, header, history, cadastroScreen }) => {
  const listItems = () => {
    debugger;
    return header.map(item => <div>{items[item]}</div>);
  };

  const changePage = (path) => {
    history.push(path);
  }

  return (
    <div className={styles.LineComponent}>
      {listItems()}
      <div>
        <img className={styles.icon} src={EditIcon} alt="" onClick={() => changePage(cadastroScreen)}/>
        <img className={styles.icon} src={DeleteIcon} alt=""/>
      </div>
    </div>
  );
};

LineComponent.propTypes = {};

LineComponent.defaultProps = {};

export default withRouter(LineComponent);
