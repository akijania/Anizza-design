import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductsToOrder } from '../../../redux/cartRedux';
import { addOrderRequest } from '../../../redux/orderRedux';

import styles from './DeliveryDetails.module.scss';

class Component extends React.Component {
  state = {
    deliveryDetails: {
      date: '',
      name: '',
      surname: '',
      address: '',
      post: '',
      town: '',
      country: '',
      email: '',
      phone: '',
      products: [],
    },
  };
  updateTextField = ({ target }) => {
    const { deliveryDetails } = this.state;
    const { value, name } = target;

    this.setState({ deliveryDetails: { ...deliveryDetails, [name]: value } });
  };
  submitForm = (e) => {
    const { deliveryDetails } = this.state;
    const { products,  addOrderRequest } = this.props;
    deliveryDetails.date = new Date().toISOString();
    deliveryDetails.products = products;
    deliveryDetails.totalPrice = products.map((item) => item.price * item.quantity).reduce(function (a, b) {return a + b;});
    e.preventDefault();
    addOrderRequest(deliveryDetails);
  }
  render() {
    const { updateTextField, submitForm } = this;
    const { className } = this.props;
    const { deliveryDetails } = this.state;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Grid container justify="flex-end">
            <Grid item xs={12} md={7}>
              <h2>PLEASE ENTER THE DELIVERY DETAILS</h2>
            </Grid>
          </Grid>
          <form onSubmit={submitForm}>
            <Grid container className={styles.form}>
              <Grid item xs={12} sm={6} className={styles.input}>
                <TextField
                  id="name"
                  name="name"
                  value={deliveryDetails.name}
                  onChange={updateTextField}
                  label="NAME"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} className={styles.input}>
                <TextField
                  id="surname"
                  name="surname"
                  value={deliveryDetails.surname}
                  onChange={updateTextField}
                  label="SURNAME"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} className={styles.input}>
                <TextField
                  id="address"
                  name="address"
                  value={deliveryDetails.address}
                  onChange={updateTextField}
                  label="ADDRESS"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} className={styles.input}>
                <TextField
                  id="post"
                  name="post"
                  value={deliveryDetails.post}
                  onChange={updateTextField}
                  label="POST CODE"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} className={styles.input}>
                <TextField
                  id="town"
                  name="town"
                  value={deliveryDetails.town}
                  onChange={updateTextField}
                  label="TOWN"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} className={styles.input}>
                <TextField
                  id="country"
                  name="country"
                  value={deliveryDetails.country}
                  onChange={updateTextField}
                  label="COUNTRY"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} className={styles.input}>
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  value={deliveryDetails.email}
                  onChange={updateTextField}
                  label="E-MAIL"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} className={styles.input}>
                <TextField
                  id="phone"
                  name="phone"
                  value={deliveryDetails.phone}
                  onChange={updateTextField}
                  label="TELEPHONE"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <div className={styles.submit}>
              <button type="submit">Buy now</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  addOrderRequest: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getProductsToOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  addOrderRequest: (data) => dispatch(addOrderRequest(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as DeliveryDetails,
  Component as DeliveryDetailsComponent,
};
