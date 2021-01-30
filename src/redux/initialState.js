export const initialState = {
  categories: [
    { id: 'collection', name: 'Collection' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'skirts', name: 'Skirts' },
    { id: 'accessories', name: 'Accessories' },
  ],
  products: {
    data: [
      { id: 1, name: 'red dress', category: 'dresses', image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: 120,
      },
      {id: 2, name: 'blue dress', category: 'dresses', image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', price: 100}],
    loading: {
      active: false,
      error: false,
    },
  },
};
