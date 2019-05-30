import * as actionTypes from 'constants'
import { getRedirectPath } from 'util'

const initState = {
  user: '',
  type: '',
  msg: '',
  redirectTo: ''
}

export default function user(state = initState, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        msg: '',
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      }
    case actionTypes.LOAD_DATA:
      return { ...state, ...action.payload }
    case actionTypes.ERROR_MSG:
      return { ...state, msg: action.msg, isAuth: false }
    case actionTypes.LOGOUT:
      return { ...initState, redirectTo: '/login' }
    default:
      return state
  }
}
