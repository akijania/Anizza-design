import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './TopBar.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={3}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={10}>
        <h1>Anizza design</h1>
      </Grid>
      <Grid item xs={1}>
        <Link to="/" className={styles.icon}>
          <ShoppingBasketIcon fontSize='large' className={styles.icon} />
        </Link>
      </Grid>
    </Grid>

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
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
