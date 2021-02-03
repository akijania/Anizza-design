import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './DeliveryDetails.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={7}>
          <h2>PLEASE ENTER THE DELIVERY DETAILS</h2>
        </Grid>
      </Grid>
      <Grid container className={styles.form}>
        <Grid item xs={12} sm={6} className={styles.input}>
          <TextField
            id="name"
            label="NAME"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.input}>
          <TextField
            id="surname"
            label="SURNAME"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.input}>
          <TextField
            id="address"
            label="ADDRESS"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.input}>
          <TextField
            id="post"
            label="POST CODE"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.input}>
          <TextField
            id="town"
            label="TOWN"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.input}>
          <TextField
            id="country"
            label="COUNTRY"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.input}>
          <TextField
            id="email"
            type="email"
            label="E-MAIL"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.input}>
          <TextField
            id="phone"
            label="TELEPHONE"
            fullWidth
          />
        </Grid>
      </Grid>
      <div>
        <button>Buy now</button>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as DeliveryDetails,
  // Container as DeliveryDetails,
  Component as DeliveryDetailsComponent,
};
