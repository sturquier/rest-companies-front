import axios from 'axios'
import { GET_COMPANIES, GET_COMPANY, GET_COMPANY_RESULTS } from '../constants/ActionTypes'
require('dotenv').config()
const API_ENDPOINT = process.env.API_ENDPOINT;

export function getCompanies() {
	return function(dispatch) {
		axios.get(`${API_ENDPOINT}/companies`).then((response) => {
			dispatch({
				type: GET_COMPANIES,
				payload: response.data
			})
		})
	}
}

export function getCompany(id) {
	return function(dispatch) {
		axios.get(`${API_ENDPOINT}/companies/${id}`).then((response) => {
			dispatch({
				type: GET_COMPANY,
				payload: response.data
			})
		})
	}
}

export function getCompanyResults() {
	return function(dispatch) {
		axios.get(`${API_ENDPOINT}/companies/${id}/results`).then((response) => {
			dispatch({
				type: GET_COMPANY_RESULTS,
				payload: response.data
			})
		})
	}
}