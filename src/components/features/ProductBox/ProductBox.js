import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({ id, name, image, price, className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.image}>
      <Link to={`/product${id}`}>
        <img src={image} alt={name}></img>
      </Link>
    </div>
    <Link to={`/product${id}`}>
      <p>{name}</p>
    </Link>
    <p>{price} $</p>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
