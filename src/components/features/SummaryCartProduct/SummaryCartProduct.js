import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';

import styles from './SummaryCartProduct.module.scss';

const Component = ({
  className,
  photo,
  price,
  quantity,
  title,
  size,
  text,
}) => (
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
        <p>
          price: {price}$ x {quantity} = {price * quantity}$
        </p>
      </Grid>
      <Grid item xs={7} md={2} className={styles.content}>
        <p>{text} </p>
      </Grid>
      <Grid item xs={1} md={1} className={styles.content}>
        <p>{price * quantity}$</p>
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export {
  Component as SummaryCartProduct,
  Component as SummaryCartProductComponent,
};
