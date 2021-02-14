import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './MenuBar.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <ul className={styles.menu}>
      <li>collection</li>
      <li>dresses</li>
      <li>shirts</li>
      <li>trousers</li>
      <li>accessories</li>
    </ul>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as MenuBar, Component as MenuBarComponent };
