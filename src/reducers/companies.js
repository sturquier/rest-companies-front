import { GET_COMPANIES } from '../constants/ActionTypes'

export default function (state = [], action) {
	switch(action.type) {
		case GET_COMPANIES:
			return action.payload
	}

	return state
}