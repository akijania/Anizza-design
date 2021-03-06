export const initialState = {
  categories: [
    { id: 'collection', name: 'Collection' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shirts', name: 'Shirts and blouses' },
    { id: 'skirts', name: 'Skirts' },
    { id: 'accessories', name: 'Accessories' },
  ],
  cart: {
    products: [],
    miniCartOpen: false,
  },
  products: {
    data: [],
    product: {},
    loading: {
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
    requests: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
