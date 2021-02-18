import axios from 'axios'
import { SIGN_UP_URL, SIGN_IN_URL, SIGN_OUT_URL } from "../urls/index";

export const fetchSignUp = (params) => {
  return axios.post(SIGN_UP_URL, params)
}