import axios from "axios";

export const userRegisterAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    //console.log(user);
    const response = await axios.post("/api/user/register", user);
    console.log(response); //S-----  for checking
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED" });
  }
};

export const userLoginAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/user/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
};
