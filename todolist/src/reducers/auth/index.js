import { USER_REGISTRATION,  USER_REGISTRATION_FAIL, USER_LOGIN , USER_LOGIN_FAIL, USER_LOGOUT } from "../../actions/authAction";

const user = localStorage.getItem("user");

const initialState = user
  ? { isLoggedIn: true, user:JSON.parse(user)  }
  : { isLoggedIn: false, user: null, };

const auth = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case USER_REGISTRATION:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.data,

      };
    case USER_REGISTRATION_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: payload.data,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.data,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: payload.data,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;