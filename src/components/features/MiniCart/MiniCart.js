import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { closeCart, getAllCartProducts } from '../../../redux/cartRedux';

import styles from './MiniCart.module.scss';

class Component extends React.Component {
  handleCloseCart = () => {
    const { closeCart } = this.props;
    closeCart();
  };
  render() {
    const { className, products, miniCartOpen } = this.props;
    if (products.length === 0)
      return (
        <div className={styles.container}>
          <div className={styles.btnClose}>x</div>
          <p>-Your basket is currently empty-</p>
        </div>
      );
    else
      return (
        <div className={clsx(className, styles.root)}>
          <div className={miniCartOpen ? styles.overlay : ''}>
            <div
              className={`${styles.cart} ${
                !miniCartOpen ? styles.closeCart : ''
              }`}
            >
              <div className={styles.container}>
                <div className={styles.btnClose} onClick={this.handleCloseCart}>
                  x
                </div>
                <h1>CART PRODUCTS</h1>
                {products.map((item) => (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>size: {item.size}</p>
                    <p>
                      price: {item.price}$ x {item.quantity} =
                      {item.price * item.quantity}$
                    </p>
                  </div>
                ))}
                <div className={styles.totalPrice}>
                  <h3>
                    {`Total price: ${products
                      .map((item) => item.price * item.quantity)
                      .reduce(function (a, b) {
                        return a + b;
                      })}
                    $`}
                  </h3>
                </div>
                <div className={styles.summary}>
                  <Link to="/cart">
                    <button onClick={this.handleCloseCart}>Go to cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

Component.propTypes = {
  products: PropTypes.array,
  miniCartOpen: PropTypes.bool,
  closeCart: PropTypes.func,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAllCartProducts(state),
  miniCartOpen: state.cart.miniCartOpen,
});
const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as MiniCart, Component as MiniCartComponent };
