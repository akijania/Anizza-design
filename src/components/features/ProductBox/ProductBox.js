import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './ProductBox.module.scss';

const Component = ({ _id, title, photo, price, photo2, className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.image}>
      <Link to={`/product/${_id}`}>
        {photo2 ? (
          <img src={photo2} alt={title} className={styles.photoHover} />
        ) : (
          <img src={photo} alt={title} className={styles.photoHover} />
        )}
        <img src={photo} alt={title} className={styles.mainPhoto} />
      </Link>
    </div>
    <Link to={`/product/${_id}`}>
      <p>{title}</p>
    </Link>
    <p>{price} $</p>
  </div>
);

Component.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
  photo2: PropTypes.string,
  price: PropTypes.number,
  className: PropTypes.string,
};

export { Component as ProductBox, Component as ProductBoxComponent };
