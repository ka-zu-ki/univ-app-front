import { 
  SIGN_UP,
  LOG_IN,
  LOG_OUT
} from "../actions";

export const initialState = {
  user: [{
    id: 0,
    email: "",
  }],
  isLogin: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        isLogin: true
      }
    case LOG_IN:
      return {
        ...state,
        isLogin: true
      }
    case LOG_OUT:
      return state
    default:
      return state
  }
}