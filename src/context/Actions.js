import {LOGINSTART, LOGINSUCCESS, LOGINFAILURE, UPDATESTART, UPDATEFAILURE, UPDATESUCCESS, LOGOUT} from './ActionTypes'

export const LoginStart = (userCredentials) => ({
  type: LOGINSTART
})

export const LoginSuccess = (user) => ({
  type: LOGINSUCCESS,
  payload: user
});

export const LoginFailure = () => ({
  type: LOGINFAILURE
})

export const UpdateStart = (userCredentials) => ({
  type: UPDATESTART
})

export const UpdateSuccess = (user) => ({
  type: UPDATESUCCESS,
  payload: user
});

export const UpdateFailure = () => ({
  type: UPDATEFAILURE
})

export const Logout = () => ({
  type: LOGOUT
})