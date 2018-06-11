import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ResultsListItem = (props) => {

	const {results} = props
	console.log(results)
	return (

		<LineChart width={1000} height={400} data={results}
			margin={{top: 30, right: 30, left: 30, bottom: 30}}
		>
			<XAxis dataKey="year"/>
			<YAxis/>
			<CartesianGrid strokeDasharray="3 3"/>
			<Tooltip/>
			<Legend/>
			<Line type="monotone" dataKey="ca" stroke="#1A237E"/>
			<Line type="monotone" dataKey="margin" stroke="#3E2723"/>
			<Line type="monotone" dataKey="ebitda" stroke="#004D40"/>
			<Line type="monotone" dataKey="loss" stroke="#C51162"/>
		</LineChart>
	)
}

export default ResultsListItem