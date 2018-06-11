import { GET_COMPANY } from '../constants/ActionTypes'

export default function (state = [], action) {
	switch(action.type) {
		case GET_COMPANY:
			return action.payload
	}

	return state
}