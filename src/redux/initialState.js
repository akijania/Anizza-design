export const initialState = {
  categories: [
    { id: 'collection', name: 'Collection' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'trousers', name: 'Trousers' },
    { id: 'accessories', name: 'Accessories' },
  ],
  products: {
    data: [
      { id: 1, name: 'red dress', category: 'dresses' },
      {id: 2, name: 'blue dress', category: 'dresses' }],
    loading: {
      active: false,
      error: false,
    },
  },
};
