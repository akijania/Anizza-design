/* selectors */
export const getAllCartProducts = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const LOAD_CART = createActionName('LOAD_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const TOGGLE_CART = createActionName('TOGGLE_CART');
const CHANGE_QUANTITY = createActionName('CHANGE_QUANTITY');

/* action creators */
export const fetchAddCart = (payload) => ({ payload, type: ADD_TO_CART });
export const loadCart = (payload) => ({ payload, type: LOAD_CART });
export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});
export const toggleCart = (payload) => ({ payload, type: TOGGLE_CART });
export const changeQuantity = (payload) => ({ payload, type: CHANGE_QUANTITY });

export const fetchLoadCart = () => (dispatch, getState) => {
  try {
    const cartProducts = JSON.parse(localStorage.getItem(`cart`)).products;
    if (cartProducts !== null) dispatch(loadCart(cartProducts));
    // localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('cart', serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

// export const fetchAddCart = () => (dispatch, getState) => {
//   try {
//     const cartProducts = JSON.parse(localStorage.getItem(`cart`)).products;
//     if (cartProducts !== null) dispatch(loadCart(cartProducts));
//   } catch (err) {
//     console.log(err);
//   }
// };

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...statePart,
        products: action.payload,
      };
    case ADD_TO_CART: {
      const isInCart = statePart.products.find(
        (item) => item.id === action.payload.id
      );
      if (isInCart) {
        return {
          ...statePart,
          products: statePart.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              };
            }
            return { ...product };
          }),
        };
      }
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
