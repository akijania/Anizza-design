import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';
import './styles/global.scss';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductPage } from './components/views/ProductPage/ProductPage';
import { NotFound } from './components/views/NotFound/NotFound';
import { Cart } from './components/views/Cart/Cart';
import { DeliveryDetails } from './components/views/DeliveryDetails/DeliveryDetails';
import { Summary } from './components/views/Summary/Summary';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/product/:id' component={ProductPage} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/cart/summary' component={Summary} />
              <Route exact path='/cart/delivery' component={DeliveryDetails} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
