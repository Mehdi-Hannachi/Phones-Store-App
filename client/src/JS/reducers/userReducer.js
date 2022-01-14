import {
  GET_AUTH_USER,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
  LOG_OUT,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../actionsTypes.js/userActionsTypes";

const initialState = {
  loading: false,
  isAuth: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
    case USER_REGISTER:
    case GET_AUTH_USER:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
        token: payload,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload.msg,
      };
    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };
    case USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };
    case GET_AUTH_USER_FAILED:
      return {
        ...state,
        loading: false,
        isAuth: false,
        errors: payload,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
