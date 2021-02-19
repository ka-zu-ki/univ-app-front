import { 
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT
} from "../actions";

export const initialState = {
  userInfo: [{
    id: 0,
    name: "",
    email: ""
  }],
  isLogin: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email
      }
    case SIGN_IN:
      return {
        ...state,
        isLogin: true
      }
    case SIGN_OUT:
      return state
    default:
      return state
  }
}