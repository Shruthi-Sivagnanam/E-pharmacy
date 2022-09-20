import axios from "axios";

export const allMedAction = () => async (dispatch) => {
  dispatch({ type: "ALL_MED_REQUEST" });
  try {
    const response = await axios.get("/api/med/allmed");
    //console.log(response);
    dispatch({ type: "ALL_MED_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_MED_FAILED", payload: error });
  }
};
