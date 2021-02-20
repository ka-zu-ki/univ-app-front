import axios from 'axios'
import { 
  SIGN_UP_URL, 
  SIGN_IN_URL,
  LESSONS_URL 
} from "../urls/index";

export const fetchSignUp = (params) => {
  return axios.post(SIGN_UP_URL, params)
}

export const fetchSignIn = (params) => {
  return axios.post(SIGN_IN_URL, params)
}

export const fetchLessons = async() => {
  return await axios.get(LESSONS_URL)
    .then(res => {
      return console.log(res.data)
    })
    .catch(e => console.log(e.message))
}