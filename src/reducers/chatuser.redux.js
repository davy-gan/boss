import * as actionTypes from 'constants'

const initState = {
	userlist:[]
}

export default function chatuser(state=initState, action){
	switch(action.type){
		case actionTypes.USER_LIST:
			return {...state, userlist:action.payload}
		default:
			return state
	}
}
