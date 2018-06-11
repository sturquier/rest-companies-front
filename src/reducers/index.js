import { combineReducers } from 'redux'
import CompaniesReducer from './companies'

const rootReducer = combineReducers({
	companies: CompaniesReducer
})

export default rootReducer