import {
  LOGINSTART,
  LOGINSUCCESS,
  LOGINFAILURE,
  UPDATESTART,
  UPDATEFAILURE,
  UPDATESUCCESS,
  LOGOUT,
} from "./ActionTypes";

const Reducer = (state, action) => {
  switch (action.type) {
    case LOGINSTART:
      return { ...state, isFetching: true };
    case LOGINSUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGINFAILURE:
      return { ...state, error: true };
    case UPDATESTART:
      return { ...state, isFetching: true };
    case UPDATESUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case UPDATEFAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case LOGOUT:
      return { ...state, user: null, isFetching: false, error: false };
    default:
      return state;
  }
};

export default Reducer;
