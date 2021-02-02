import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchProduct, getProduct } from '../../../redux/productsRedux';
import Grid from '@material-ui/core/Grid';

import styles from './ProductPage.module.scss';

class Component extends React.Component {
  state = {
    quantity: 1,
  }

  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  changeQuantityHandler = (type) => {
    const {quantity} = this.state;
    if(type==='decrease' && quantity > 1 ){
      this.setState({quantity: quantity - 1});
    } else if (type==='increase'){
      this.setState({quantity: quantity + 1});
    }
    
  };

  render() {
    const { className, product } = this.props;
    const {quantity} = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Grid container justify="flex-end">
            <Grid item xs={8} md={4} className={styles.image}>
              <img src={product.photo} alt={product.title} />
            </Grid>
            <Grid item xs={8} md={4}>
              <div className={styles.content}>
                <h2>{product.title}</h2>
                <p>{product.text}</p>
                <hr></hr>
                <h1>{product.price} USD</h1>
                <hr></hr>
                {product.size === true ? (
                  <div>
                    <input type="radio" id="xs" name="size" value="XS"></input>
                    XS
                    <input type="radio" name="size" value="S"></input>S
                    <input type="radio" name="size" value="M"></input>M
                    <input type="radio" name="size" value="L"></input>L
                    <input type="radio" name="size" value="XL"></input>XL
                  </div>
                ) : (
                  <p>ONE SIZE</p>
                )}
                <div className={styles.productQuantity}>
                  <p>
                    <span
                      className={styles.quantityButton}
                      onClick={() =>
                        this.changeQuantityHandler('decrease')
                      }
                    >
                      -
                    </span>
                    <span className={styles.quantityBox}>
                      {quantity}
                    </span>
                    <span
                      className={styles.quantityButton}
                      onClick={() =>
                        this.changeQuantityHandler('increase')
                      }
                    >
                      +
                    </span>
                  </p>
                </div>

                <button>Add to cart</button>
              </div>
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
  changeQuantityHandler: PropTypes.func,
};

const mapStateToProps = (state) => ({
  product: getProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchProduct: () => dispatch(fetchProduct(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
