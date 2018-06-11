import React from 'react'
import { Link } from 'react-router-dom'

const CompaniesListItem = (props) => {

	const {company} = props

	return (
		<tr>
			<td>{company.name}</td>
			<td>{company.sector}</td>
			<td>{company.siren}</td>
			<td><Link to={`companies/${company.id}`}><i className="material-icons">find_in_page</i></Link></td>
		</tr>
	)
}

export default CompaniesListItem