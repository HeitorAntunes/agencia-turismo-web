import React from 'react';
import PropTypes from 'prop-types';
import styles from './FinanceiroComponent.module.css';

const FinanceiroComponent = () => (
  <div className={styles.FinanceiroComponent} data-testid="FinanceiroComponent">
    FinanceiroComponent Component
  </div>
);

FinanceiroComponent.propTypes = {};

FinanceiroComponent.defaultProps = {};

export default FinanceiroComponent;
