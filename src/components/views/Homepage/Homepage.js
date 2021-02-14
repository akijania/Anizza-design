import React from 'react';
import PropTypes from 'prop-types';
import {ProductsList} from '../../features/ProductsList/ProductsList';

import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <ProductsList />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
