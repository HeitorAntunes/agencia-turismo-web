import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchComponent.module.css";
import InputField from "../../../../components/InputField/InputField";
import PersonAdd from "../../../../assets/person_add-24px.svg";
import SearchIcon from "../../../../assets/search-24px.svg";
import {withRouter} from "react-router";

const SearchComponent = ({ nameComponent = "", search, history, cadastroScreen }) => {
  const [value, setValue] = React.useState("");

  const handleChange = prop => event => {
    setValue(event.target.value);
  };

  const goToPage = (path) => {
    history.push(path)
  }

  return (
    <div className={styles.SearchComponent}>
      <span className={styles.search}>Pesquisar {nameComponent}</span>
      <div className={styles.searchField}>
        <div className={styles.inputField}>
          <InputField
            text={"Digite aqui"}
            type="text"
            handleChange={handleChange}
            field={"nome"}
            value={value}
          />
        </div>
        <img className={styles.icon} src={SearchIcon} alt="" onClick={() => search(value)}></img>
        <img className={styles.icon} src={PersonAdd} alt="" onClick={() => goToPage(cadastroScreen)}></img>
      </div>
    </div>
  );
};

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default withRouter(SearchComponent);
