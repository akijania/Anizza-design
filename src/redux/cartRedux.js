/* selectors */
export const getAll = ({ cart }) => cart;
export const getCount = ({ cart}) => cart.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
