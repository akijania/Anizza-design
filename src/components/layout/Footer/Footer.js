import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <footer className={styles.root}>
      <div className={styles.footerMenu}>
        <div className={styles.container}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <a href='/#'>About us</a>
                  </li>
                  <li>
                    <a href='/#'>Policy</a>
                  </li>
                  <li>
                    <a href='/#'>Conditions</a>
                  </li>
                  <li>
                    <a href='/#'>Online support</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={styles.menuWrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <a href='/#'>Specials</a>
                  </li>
                  <li>
                    <a href='/#'>New products</a>
                  </li>
                  <li>
                    <a href='/#'>Best Sellers</a>
                  </li>
                  <li>
                    <a href='/#'>Out Stores</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={styles.menuWrapper}>
                <h6>Orders</h6>
                <ul>
                  <li>
                    <a href='/#'>Payment options</a>
                  </li>
                  <li>
                    <a href='/#'>Shipping and delivery</a>
                  </li>
                  <li>
                    <a href='/#'>Returns</a>
                  </li>
                  <li>
                    <a href='/#'>Shipping</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={3} className={styles.socialMedia}>
              <h6>Be with us on:</h6>
              <ul>
                <li>
                  <a href='/#'>
                    <InstagramIcon>Twitter</InstagramIcon>
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <FacebookIcon>Facebook</FacebookIcon>
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <YouTubeIcon>YouTube</YouTubeIcon>
                  </a>
                </li>
                <li>
                  <a href='/#'>
                    <PinterestIcon>Pinterest</PinterestIcon>
                  </a>
                </li>
              </ul>
            </Grid>
    
          </Grid>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <Grid container spacing={3}>

            <Grid item xs={6}  className={styles.copyright}>
              <p>©Copyright 2021 Anizza design | All Rights Reserved</p>
            </Grid>
           
          </Grid>
         
        </div>
      </div>
    </footer>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
