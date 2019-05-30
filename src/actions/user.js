import axios from 'axios'
import * as actionTypes from 'constants'

function authSuccess(obj) {
  const { pwd, ...data } = obj
  return { type: actionTypes.AUTH_SUCCESS, payload: data }
}
function errorMsg(msg) {
  return {
    type: actionTypes.ERROR_MSG,
    msg
  }
}

export function loadData(userinfo) {
  return { type: actionTypes.LOAD_DATA, payload: userinfo }
}

export function logoutSubmit() {
  return { type: actionTypes.LOGOUT }
}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login', { user, pwd }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码不一样')
  }
  return dispatch => {
    axios.post('/user/register', { user, pwd, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
