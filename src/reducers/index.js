import { combineReducers } from 'redux'
import CompaniesReducer from './companies'
import CompanyReducer from './company'

const rootReducer = combineReducers({
	companies: CompaniesReducer,
	activeCompany: CompanyReducer
})

export default rootReducer