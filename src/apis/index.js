import axios from "axios";
import {
  SIGN_UP_URL,
  LOG_IN_URL,
  LESSONS_URL,
  LESSON_URL,
  CONDITIONAL_LESSON_URL,
} from "../urls/index";

export const fetchSignUp = (params) => {
  return axios.post(
    SIGN_UP_URL,
    {
      user: {
        email: params.email,
        password: params.password,
        password_confirmation: params.passwordConfirmation,
      }
    }
    // { withCredentials: true } //cookieを含める
  );
};

export const fetchSignIn = (params) => {
  return axios.post(
    LOG_IN_URL,
    {
      user: {
        email: params.email,
        password: params.password,
        password_confirmation: params.passwordConfirmation,
      }
    }
  );
};

export const fetchLessons = () => {
  return axios.get(LESSONS_URL);
};

export const fetchLesson = (id) => {
  return axios.get(LESSON_URL + id);
};

export const fetchConditionalLessons = (week, time) => {
  return axios.get(CONDITIONAL_LESSON_URL, {
    params: {
      week: week,
      time: time,
    },
  });
};
