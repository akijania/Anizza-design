import React from 'react';
import PropTypes from 'prop-types';
import randomID from '@akijania/randomid-generator';
import clsx from 'clsx';
import { CartProduct } from '../../features/CartProduct/CartProduct';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {
  // changeQuantityHandler = (type) => {
  //   const { quantity } = this.state;
  //   if (type === 'decrease' && quantity > 1) {
  //     this.setState({ quantity: quantity - 1 });
  //   } else if (type === 'increase') {
  //     this.setState({ quantity: quantity + 1 });
  //   }
  // };

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
              <h2>
                Total price:
                {products
                  .map((item) => item.price * item.quantity)
                  .reduce(function (a, b) {
                    return a + b;
                  })}
                $
              </h2>
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

export {
  Container as Cart,
  Component as CartComponent,
};
