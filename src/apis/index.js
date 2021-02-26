import axios from 'axios'
import { 
  SIGN_UP_URL, 
  SIGN_IN_URL,
  LESSONS_URL,
  LESSON_URL,
  CONDITIONAL_LESSON_URL
} from "../urls/index";

export const fetchSignUp = (params) => {
  return axios.post(SIGN_UP_URL, params)
}

export const fetchSignIn = (params) => {
  return axios.post(SIGN_IN_URL, params)
}

export const fetchLessons = () => {
  return axios.get(LESSONS_URL)
}

export const fetchLesson = (id) => {
  return axios.get(LESSON_URL + id)
}

export const fetchConditionalLessons = (week, time) => {
  return axios.get(CONDITIONAL_LESSON_URL, {
    params: {
      week: week,
      time: time
    }
  })
}