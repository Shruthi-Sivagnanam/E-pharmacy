export const allMedReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_MED_REQUEST":
      return {
        loading: true,
      };
    case "ALL_MED_SUCCESS":
      return {
        loading: false,
        success: true,
        medData: action.payload,
      };
    case "ALL_MED_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
