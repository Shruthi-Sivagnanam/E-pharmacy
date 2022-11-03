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
