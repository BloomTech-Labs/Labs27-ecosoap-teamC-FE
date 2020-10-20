import axios from 'axios';

export const BUYER_LOGIN = 'BUYER_LOGIN';
export const BUYER_LOGIN_SUCCESS = 'BUYER_LOGIN_SUCCESS';
export const BUYER_LOGIN_FAILURE = 'BUYER_LOGIN_FAILURE';

export const BUYER_REGISTER = 'BUYER_REGISTER';
export const BUYER_REGISTER_SUCCESS = 'BUYER_REGISTER_SUCCESS';
export const BUYER_REGISTER_FAILURE = 'BUYER_REGISTER_FAILURE';

export const GET_BUYER_ORDERS = 'GET_BUYER_ORDERS';
export const GET_BUYER_ORDERS_ERROR = 'GET_BUYER_ORDERS_ERROR';

export const GET_BUYER_ORDER_DETAILS = 'GET_BUYER_ORDER_DETAILS';
export const GET_BUYER_ORDER_DETAILS_ERROR = 'GET_BUYER_ORDER_DETAILS_ERROR';

export const getBuyerOrders = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/orders'
    );
    dispatch({
      type: GET_BUYER_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BUYER_ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getBuyerOrderDetails = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://labs27-ecosoap-teamc-api.herokuapp.com/orders/${id}`
    );
    dispatch({
      type: GET_BUYER_ORDER_DETAILS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BUYER_ORDER_DETAILS_ERROR,
      payload: console.log(e),
    });
  }
};

export const POST_BUYER_ORDERS = 'POST_BUYER_ORDERS';
export const POST_BUYER_ORDERS_ERROR = 'POST_BUYER_ORDERS_ERROR';

export const postBuyerOrders = () => async dispatch => {
  try {
    const res = await axios.post(
      'https://labs27-ecosoap-teamc-api.herokuapp.com/orders'
    );
    dispatch({
      type: POST_BUYER_ORDERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_BUYER_ORDERS_ERROR,
      payload: console.log(e),
    });
  }
};
