import Axios from 'axios';
import { API_URL } from '../config';

/* action name creator */
const reducerName = 'orders';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_ORDER = createActionName('ADD_ORDER');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addOrder = (payload) => ({ payload, type: ADD_ORDER });

/* thunk creators */

export const addOrderRequest = (data) => {
  console.log(data);
  return async (dispatch) => {
    dispatch(fetchStarted({ name: 'ADD_ORDER' }));
    try {
      await Axios.post(`${API_URL}/orders`, data);
      dispatch(fetchSuccess({ name: 'ADD_ORDER' }));
    } catch (err) {
      dispatch(fetchError({ name: 'ADD_ORDER', error: err.message || true }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ORDER:
      return { ...statePart, data: [...statePart.data, action.payload] };
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
