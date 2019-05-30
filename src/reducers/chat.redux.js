import * as actionTypes from 'constants'

const initState = {
  chatmsg: [],
  users: {},
  unread: 0
}

export default function chat(state = initState, action) {
  switch (action.type) {
    case actionTypes.MSG_LIST:
      return {
        ...state,
        users: action.payload.users,
        chatmsg: action.payload.msgs,
        unread: action.payload.msgs.filter(
          v => !v.read && v.to === action.payload.userid
        ).length
      }
    case actionTypes.MSG_RECV:
      const n = action.payload.to === action.userid ? 1 : 0
      return {
        ...state,
        chatmsg: [...state.chatmsg, action.payload],
        unread: state.unread + n
      }
    case actionTypes.MSG_READ:
      const { from, num } = action.payload
      return {
        ...state,
        chatmsg: state.chatmsg.map(v => ({
          ...v,
          read: from === v.from ? true : v.read
        })),
        unread: state.unread - num
      }
    default:
      return state
  }
}
