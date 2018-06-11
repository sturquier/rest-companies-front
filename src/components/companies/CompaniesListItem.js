import React from 'react'

const CompaniesListItem = (props) => {

	const {company} = props

	return (
		<tr>
			<td>{company.name}</td>
			<td>{company.sector}</td>
			<td>{company.siren}</td>
			<td>LINK</td>
		</tr>
	)
}

export default CompaniesListItem