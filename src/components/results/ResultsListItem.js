import React from 'react'

const ResultsListItem = (props) => {

	const {results} = props
	return (
		<tr>
			<td>{results.ca}</td>
			<td>{results.margin}</td>
			<td>{results.ebitda}</td>
			<td>{results.loss}</td>
			<td>{results.year}</td>
		</tr>
	)
}

export default ResultsListItem