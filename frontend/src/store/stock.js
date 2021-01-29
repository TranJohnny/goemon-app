// const publicKey = 'Tpk_718a8ee4e1de42f5b378907bcc07cec8';
const sandboxKey = 'Tpk_5b639af76f6f4ccab053715f4456f509';

const ADD_ONE = 'stock/ADD_ONE';

const addOneStock = (stock) => ({
  type: ADD_ONE,
  stock,
});

export const getOneStock = (id) => async (dispatch) => {
  const response = await fetch(`/api/stocks/${id}`, {
    headers: {
      accepts: 'application/json',
    },
  });

  if (response.ok) {
    const stock = await response.json();
    const symbol = stock.ticker;
    const res = await fetch(
      `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${sandboxKey}`
    );
    if (res.ok) {
      const newStock = await res.json();
      // console.log('NEWSTOCK: ', newStock);
      const obj = {
        symbol: newStock.symbol,
        name: newStock.companyName,
        latestPrice: newStock.latestPrice,
        price: newStock.iexRealtimePrice,
        change: newStock.change,
        changePercent: newStock.changePercent,
        marketCap: newStock.marketCap,
      };
      dispatch(addOneStock(obj));
    }
  }
};

const stockReducer = (state = {}, action) => {
  // let newState;
  switch (action.type) {
    case ADD_ONE: {
      return { stock: action.stock };
    }
    default:
      return state;
  }
};

export default stockReducer;
