import { combineReducers } from 'redux'
import CompaniesReducer from './companies'
import CompanyReducer from './company'
import CompanyResultsReducer from './companyResults'

const rootReducer = combineReducers({
	companies: CompaniesReducer,
	activeCompany: CompanyReducer,
	companyResults: CompanyResultsReducer
})

export default rootReducer