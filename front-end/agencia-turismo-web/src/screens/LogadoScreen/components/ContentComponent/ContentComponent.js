import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentComponent.module.css";
import LineComponent from "../LineComponent/LineComponent";

const ContentComponent = ({ state, header, cadastroScreen, deleteElement }) => {
  const listItems = () => {
    // return state.map(item => <span key={item}>{item.nome}</span>);
    return state.map(item => <LineComponent items={item} header={header} cadastroScreen={cadastroScreen} deleteElement={deleteElement}/>)
  };

  return <div className={styles.ContentComponent}>{listItems()}</div>;
};

ContentComponent.propTypes = {};

ContentComponent.defaultProps = {};

export default ContentComponent;
