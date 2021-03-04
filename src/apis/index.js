import axios from "axios";
import {
  SIGN_UP_URL,
  LOG_IN_URL,
  LOGGED_IN_URL,
  LOG_OUT_URL,
  LESSONS_URL,
  LESSON_URL,
  CONDITIONAL_LESSON_URL,
  POST_LESSON_URL,
  REGISTERED_LESSONS_URL
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
    },
    { withCredentials: true } //cookieを含める
  );
};

export const fetchLogIn = (params) => {
  return axios.post(
    LOG_IN_URL,
    {
      user: {
        email: params.email,
        password: params.password
      }
    },
    { withCredentials: true }
  );
};

export const fetchCheckLogin = (params) => {
  return axios.get(
    LOGGED_IN_URL,
    { withCredentials: true }
  )
}

export const fetchLogOut = () => {
  return axios.delete(LOG_OUT_URL)
}

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

export const fetchPostLesson = (lesson_id, user_id) => {
  return axios.post(POST_LESSON_URL + lesson_id, {user_id: user_id})
}

export const fetchRegisteredLessons = (user_id) => {
  return axios.get(REGISTERED_LESSONS_URL, {params: {user_id: user_id}})
}