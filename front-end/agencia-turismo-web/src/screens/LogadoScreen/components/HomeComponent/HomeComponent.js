import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.css';


const HomeComponent = ({setTitle}) => {


  useEffect(() => {
    setTitle("");
  }, []);

  return (
  <div className={styles.HomeComponent}>
    <div className={styles.message}>Bem-vindo ao SISAT</div>
  </div>
);
}

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
