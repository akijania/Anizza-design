import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../TopBar/TopBar';

import clsx from 'clsx';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <header className={clsx(className, styles.root)}>
    <TopBar />
  </header>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
