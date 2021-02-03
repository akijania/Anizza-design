export const initialState = {
  categories: [
    { id: 'collection', name: 'Collection' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shirts', name: 'Shirts and blouses' },
    { id: 'skirts', name: 'Skirts' },
    { id: 'accessories', name: 'Accessories' },
  ],
  cart: [],
  products: {
    data: [],
    product: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
