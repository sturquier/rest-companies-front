import React, { Component } from 'react'
import CompaniesListItem from '../../components/companies/CompaniesListItem'

class CompaniesList extends Component {

	render() {
		return (
			<div>
				<h4>Companies List</h4>
				<CompaniesListItem/>
			</div>
		)
	}
}

export default CompaniesList