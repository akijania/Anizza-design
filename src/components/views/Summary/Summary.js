import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { SummaryCartProduct } from '../../features/SummaryCartProduct/SummaryCartProduct';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import styles from './Summary.module.scss';

class Component extends React.Component {
  render() {
    const { className, products } = this.props;
    if (products.length === 0)
      return (
        <div className={styles.container}>
          <p>-Your basket is currently empty-</p>
        </div>
      );
    else
      return (
        <div className={clsx(className, styles.root)}>
          <div className={styles.container}>
            <h1>SUMMARY</h1>
            {products.map((item) => (
              <div key={item.id}>
                <SummaryCartProduct {...item} />
              </div>
            ))}
            <div className={styles.totalPrice}>
              <Grid container justify="flex-end">
                <Grid item xs={3} md={1}>
                  <h3> Total price: </h3>
                </Grid>
                <Grid item xs={1} md={1}>
                  <h3>
                    {products
                      .map((item) => item.price * item.quantity)
                      .reduce(function (a, b) {
                        return a + b;
                      })}
                  $
                  </h3>
                </Grid>
              </Grid>
            </div>
            <div className={styles.summary}>
              <Link to="/cart/delivery">
                <button>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      );
  }
}

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAllCartProducts(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as Summary, Component as SummaryComponent };
