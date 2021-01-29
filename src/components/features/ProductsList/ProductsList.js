import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getAllProducts } from '../../../redux/productsRedux';
import Grid from '@material-ui/core/Grid';

import styles from './ProductsList.module.scss';

class Component extends React.Component {
  state = {
    activeCategory: 'collection',
  };
  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }
  render() {
    const { categories, className, products } = this.props;
    const { activeCategory } = this.state;
    const categoryProducts = products.filter(
      (item) => item.category === activeCategory
    );
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <div>
            <ul className={styles.menu}>
              {categories.map((item) => (
                <li key={item.id}>
                  <button
                    className={item.id === activeCategory ? styles.active : ''}
                    onClick={() => this.handleCategoryChange(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Grid container spacing={3}>
              {activeCategory === 'collection'
                ? products.map((item) => (
                  <Grid item xs={3} key={item.id}>
                    {item.name}
                    {/* <ProductBox {...item} /> */}
                  </Grid>
                ))
                : categoryProducts.map((item) => (
                  <Grid item xs={3} key={item.id}>
                    {item.name}
                    {/* <ProductBox {...item} /> */}
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => ({
  categories: getAll(state),
  products: getAllProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductsList,
  Container as ProductsList,
  Component as ProductsListComponent,
};
