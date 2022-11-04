export const orderReducers = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const allOrderReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
