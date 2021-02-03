import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getAllProducts, fetchPublishedProducts } from '../../../redux/productsRedux';
import Grid from '@material-ui/core/Grid';
import { ProductBox } from '../ProductBox/ProductBox';

import styles from './ProductsList.module.scss';

class Component extends React.Component {
  state = {
    activeCategory: 'collection',
  };
  componentDidMount() {
    const { fetchPublishedProducts } = this.props;
    fetchPublishedProducts();
  }

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
            <Grid container justify="flex-end">
              <Grid item xs={12} md={8}>
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
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container justify="space-between">
              <Grid item md={1}>
                <div className={styles.activeCategory}> {activeCategory}
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3} className={styles.list}>
                  {activeCategory === 'collection'
                    ? products.map((item) => (
                      <Grid item xs={12} sm={6} key={item._id}>
                        <ProductBox {...item} />
                      </Grid>
                    ))
                    : categoryProducts.map((item) => (
                      <Grid item xs={12} sm={6} key={item._id}>
                        <ProductBox {...item} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
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
  fetchPublishedProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  categories: getAll(state),
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedProducts: () => dispatch(fetchPublishedProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductsList,
  Container as ProductsList,
  Component as ProductsListComponent,
};
