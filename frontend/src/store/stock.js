const publicKey = 'pk_718a8ee4e1de42f5b378907bcc07cec8';

const ADD_ONE = 'stock/ADD_ONE';

const addOneStock = (stock) => ({
  type: ADD_ONE,
  stock,
});

export const getOneStock = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/api/stocks/${id}`, {
    headers: {
      accepts: 'application/json',
    },
  });

  if (response.ok) {
    const newStock = await response.json();
    dispatch(addOneStock(newStock));
  }
};

const stockReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ONE: {
      return { stock: action.stock };
    }
    default:
      return state;
  }
};

export default stockReducer;
