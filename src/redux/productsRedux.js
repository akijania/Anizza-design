import Axios from 'axios';

/* selectors */
export const getAllProducts = ({products}) => products.data;
export const getProduct = ({products}) => products.product;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = (payload) => ({ payload, type: LOAD_PRODUCT });

/* thunk creators */
export const fetchPublishedProducts = () => {
  return (dispatch, getState) => {
    const { products } = getState();
    if (!products.data.length || products.loading.active === false) {
      dispatch(fetchStarted({ name: 'LOAD_PRODUCTS' }));

      Axios.get('http://localhost:8000/api/products')
        .then((res) => {
          dispatch(loadProducts(res.data));
          dispatch(fetchSuccess({ name: 'LOAD_PRODUCTS' }));
        })
        .catch((err) => {
          dispatch(
            fetchError({ name: 'LOAD_PRODUCTS', error: err.message || true })
          );
        });}
  };
};
export const fetchProduct = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted({ name: 'LOAD_PRODUCT' }));

    Axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        dispatch(loadProduct(res.data));
        dispatch(fetchSuccess({ name: 'LOAD_PRODUCT' }));
      })
      .catch((err) => {
        dispatch(fetchError({ name: 'LOAD_PRODUCT', error: err.message || true }));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: [...action.payload] };
    case LOAD_PRODUCT:
      return { ...statePart, product: action.payload };
    case FETCH_START: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: true,
            error: false,
          },
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: false,
          },
          data: action.payload,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: action.payload,
          },
        },
      };
    }
    default:
      return statePart;
  }
};
