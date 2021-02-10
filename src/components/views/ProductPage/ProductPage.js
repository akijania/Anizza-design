import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchProduct, getProduct } from '../../../redux/productsRedux';
import { fetchAddCart, getAllCartProducts } from '../../../redux/cartRedux';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './ProductPage.module.scss';

class Component extends React.Component {
  state = {
    quantity: 1,
    size: '',
  };

  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  changeQuantityHandler = (type) => {
    const { quantity } = this.state;
    if (type === 'decrease' && quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    } else if (type === 'increase') {
      this.setState({ quantity: quantity + 1 });
    }
  };
  handleRadioChange = (event) => {
    this.setState({ size: event.target.value });
  };

  addToCartHandler = (event) => {
    const { quantity } = this.state;
    const { product, fetchAddCart } = this.props;
    const photo = product.photo;
    const price = product.price;
    const title = product.title;
    let size = this.state.size;
    let id = `${product._id}_${size}`;
    event.preventDefault();
    if (product.size === false) {
      size = 'ONE SIZE';
    }
    if (size === '') {
      alert('Choose your size');
    } else {
      let value = {
        id: id,
        photo: photo,
        price: price,
        quantity: quantity,
        title: title,
        size: size,
      };
      console.log(value);
      fetchAddCart(value);
      this.saveToLocalStore(value);
    }
    // document.body.classList.add('slide');
  };
  saveToLocalStore = (product) => {
    let cartProducts = JSON.parse(localStorage.getItem('cart'));

    if (!cartProducts) {
      let cart = {
        products: [],
      };
      cart.products.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const existingCartItem = cartProducts.products.find(
        (item) => item.id === product.id
      );
      if (existingCartItem) {
        cartProducts.products.map((item) => {
          if (item.id === product.id) {
            item.quantity = product.quantity + item.quantity;
          }
        });
        localStorage.setItem('cart', JSON.stringify(cartProducts));
      } else {
        cartProducts.products.push(product);
        localStorage.setItem('cart', JSON.stringify(cartProducts));
      }
    }
  };
  render() {
    const { className, product } = this.props;
    const { quantity, size } = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Grid container justify="flex-end">
            <Grid item xs={12} md={4} className={styles.image}>
              <img src={product.photo} alt={product.title} />
            </Grid>
            <Grid item xs={12} md={4}>
              <form onSubmit={this.addToCartHandler}>
                <div className={styles.content}>
                  <h2>{product.title}</h2>
                  <p>{product.text}</p>
                  <hr></hr>
                  <h1>{product.price} USD</h1>
                  <hr></hr>
                  {product.size === true ? (
                    <RadioGroup
                      aria-label="size"
                      name="size"
                      value={size}
                      onChange={this.handleRadioChange}
                    >
                      <FormControlLabel
                        value="xs"
                        control={<Radio />}
                        label="XS"
                      />
                      <FormControlLabel
                        value="s"
                        control={<Radio />}
                        label="S"
                      />
                      <FormControlLabel
                        value="m"
                        control={<Radio />}
                        label="M"
                      />
                      <FormControlLabel
                        value="l"
                        control={<Radio />}
                        label="L"
                      />
                      <FormControlLabel
                        value="xl"
                        control={<Radio />}
                        label="XL"
                      />
                    </RadioGroup>
                  ) : (
                    <p>ONE SIZE</p>
                  )}
                  <div className={styles.productQuantity}>
                    <p>
                      <span
                        className={styles.quantityButton}
                        onClick={() => this.changeQuantityHandler('decrease')}
                      >
                        -
                      </span>
                      <span className={styles.quantityBox}>{quantity}</span>
                      <span
                        className={styles.quantityButton}
                        onClick={() => this.changeQuantityHandler('increase')}
                      >
                        +
                      </span>
                    </p>
                  </div>
                  <button type="submit" value="Submit">
                    Add to cart
                  </button>
                  <Link to="/cart">
                    <button>See your basket</button>
                  </Link>
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string,
  fetchProduct: PropTypes.func,
  fetchAddCart: PropTypes.func,
  changeQuantityHandler: PropTypes.func,
};

const mapStateToProps = (state) => ({
  product: getProduct(state),
  cart: getAllCartProducts(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchProduct: () => dispatch(fetchProduct(props.match.params.id)),
  fetchAddCart: (value) => dispatch(fetchAddCart(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
