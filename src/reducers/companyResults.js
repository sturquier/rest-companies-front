import { GET_COMPANY_RESULTS } from '../constants/ActionTypes'

export default function (state = [], action) {
	switch(action.type) {
		case GET_COMPANY_RESULTS:
			return action.payload
	}

	return state
}