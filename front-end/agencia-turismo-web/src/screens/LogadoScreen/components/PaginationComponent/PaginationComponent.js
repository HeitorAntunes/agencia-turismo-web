import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.css';

const PaginationComponent = () => (
  <div className={styles.PaginationComponent} data-testid="PaginationComponent">
    PaginationComponent Component
  </div>
);

PaginationComponent.propTypes = {};

PaginationComponent.defaultProps = {};

export default PaginationComponent;
