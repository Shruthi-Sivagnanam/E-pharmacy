import axios from "axios";

export const orderAction = (token, amount) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_REQUEST" });
  const cartItem = getState().addToCartReducers.cartItem;
  const user = getState().userLoginReducers.user;
  const data = { token, amount, cartItem, user };
  try {
    const response = await axios.post("/api/order/placeorder", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const allOrderAction = () => async (dispatch) => {
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/order/allorder");
    console.log(response);
    dispatch({ type: "ALL_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAILED", payload: error });
    console.log(error);
  }
};
