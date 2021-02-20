const BASE_URL = 'http://localhost:3000/api/v1'
const AUTH_URL = 'http://localhost:3000/api/v1/user'

export const SIGN_UP_URL = `${AUTH_URL}`
export const SIGN_IN_URL = `${AUTH_URL}/sign_in`
export const SIGN_OUT_URL = `${AUTH_URL}/sign_out`
export const LESSONS_URL = `${BASE_URL}/lessons`
export const LESSON_URL = `${BASE_URL}/lessons/:id`