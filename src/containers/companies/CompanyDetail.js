import React, { Component } from 'react'
import CompanyContent from '../../components/companies/CompanyContent'

class CompanyDetail extends Component {

	render() {
		return (
			<div>
				<h4>Company Detail</h4>
				<p>Id : {this.props.match.params.id}</p>	
				<CompanyContent/>
			</div>
		)
	}
}

export default CompanyDetail