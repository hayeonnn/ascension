import { LOGIN_USER, REGISTER_USER } from "./types";

export default function reducer(state = {}, action) {
  switch (action.tpye) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    //break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
    //break;
    default:
      return state;
  }
}
