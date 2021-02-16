import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CartProduct } from '../../features/CartProduct/CartProduct';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';

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
            {products.map((item) => (
              <div key={item.id}>
                <CartProduct {...item} />
              </div>
            ))}
            <div className={styles.summary}>
              <h3>
                {`Total price:  ${products
                  .map((item) => item.price * item.quantity)
                  .reduce(function (a, b) {
                    return a + b;
                  })}$`}
              </h3>
              <Link to="/cart/summary">
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

export { Container as Cart, Component as CartComponent };
