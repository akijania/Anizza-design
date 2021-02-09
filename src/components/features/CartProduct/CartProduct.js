import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartProduct.module.scss';

const Component = ({ className, photo, price, quantity, title, size }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container justify="flex-end" alignItems='center'>
      <Grid item xs={4} md={2}>
        <div className={styles.image}>
          <img src={photo} alt={title}></img>
        </div>
      </Grid>
      <Grid item xs={5} md={3} className={styles.content}>
        <h2>{title}</h2>
        <p>size: {size}</p>
        <p>
          price: {price}$
        </p>
      </Grid>
      <Grid item xs={1} md={1} className={styles.content}>{quantity}</Grid>
      <Grid item xs={1} md={1} className={styles.content}>{price * quantity}$</Grid>
      <Grid item xs={1} md={1} className={styles.content}>
        <DeleteIcon />
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  photo: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
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
  Component as CartProduct,
  // Container as CartProduct,
  Component as CartProductComponent,
};
