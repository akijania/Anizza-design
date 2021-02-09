import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchLoadCart } from '../../../redux/cartRedux';

import styles from './MainLayout.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchLoadCart } = this.props;
    fetchLoadCart();
  }
  render() {
    const { className, children } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchLoadCart: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  fetchLoadCart: () => dispatch(fetchLoadCart()),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as MainLayout,
  Component as MainLayoutComponent,
};
