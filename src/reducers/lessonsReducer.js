import { FETCHING, FETCHING_SUCCESS } from "../actions";
import { REQUEST_STATE } from "../actions/request";

export const initialState = {
  fetchState: REQUEST_STATE,
  lessons: []
}

export const lessonsReducer = (state = initialState, acton) => {
  switch(applicationCache.type) {
    case FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING
      }
    case FETCHING_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        lessons: applicationCache.payload.lessons
      }
    default:
      throw new Error()
  }
}