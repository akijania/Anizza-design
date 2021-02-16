import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import clsx from 'clsx';

import { connect } from 'react-redux';
import {
  removeFromCart,
  changeQuantity,
  addText,
} from '../../../redux/cartRedux';

import styles from './CartProduct.module.scss';

const Component = ({
  className,
  id,
  photo,
  price,
  quantity,
  title,
  size,
  removeFromCart,
  changeQuantity,
  addText,
}) => {
  const handleDeleteProduct = () => {
    removeFromCart(id);
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
    const filteredProducts = cartProducts.products.filter(
      (item) => item.id !== id
    );
    cartProducts.products = filteredProducts;
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  };
  const handleQuantity = (type) => {
    changeQuantity({ id, quantity, type });
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
    cartProducts.products.map((item) => {
      if (item.id === id && type === 'increase') {
        item.quantity++;
      }
      if (item.id === id && type === 'decrease' && item.quantity > 1) {
        item.quantity--;
      }
      return cartProducts;
    });
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  };
  const handleText = (text) => {
    addText({ id, text });
    let cartProducts = JSON.parse(localStorage.getItem('cart'));
    cartProducts.products.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
      return cartProducts;
    });
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xs={4} md={2}>
          <div className={styles.image}>
            <img src={photo} alt={title}></img>
          </div>
        </Grid>
        <Grid item xs={8} md={3} className={styles.content}>
          <h2>{title}</h2>
          <p>size: {size}</p>
          <p>price: {price}$</p>
          <textarea
            id={id}
            name="text"
            rows="3"
            cols="20"
            onChange={(event) => handleText(event.currentTarget.value)}
            placeholder="any wishes? write it down!"
          ></textarea>
        </Grid>
        <Grid item xs={4} md={1} className={styles.content}>
          <div className={styles.productQuantity}>
            <p>
              <span
                className={styles.quantityButton}
                onClick={() => handleQuantity('decrease')}
              >
                -
              </span>
              <span className={styles.quantityBox}>{quantity}</span>
              <span
                className={styles.quantityButton}
                onClick={() => handleQuantity('increase')}
              >
                +
              </span>
            </p>
          </div>
        </Grid>
        <Grid item xs={3} md={1} className={styles.content}>
          {price * quantity}$
        </Grid>
        <Grid item xs={1} md={1} className={styles.content}>
          <DeleteIcon
            className={styles.deleteButton}
            onClick={() => handleDeleteProduct()}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  removeFromCart: PropTypes.func,
  changeQuantity: PropTypes.func,
  addText: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  changeQuantity: (value) => dispatch(changeQuantity(value)),
  addText: (value) => dispatch(addText(value)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export { Container as CartProduct, Component as CartProductComponent };
