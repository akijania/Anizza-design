import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({ _id, title, photo, price, className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.image}>
      <Link to={`/product/${_id}`}>
        <img src={photo} alt={title}></img>
      </Link>
    </div>
    <Link to={`/product/${_id}`}>
      <p>{title}</p>
    </Link>
    <p>{price} $</p>
  </div>
);

Component.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
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
