import React from 'react'
import { Link } from 'react-router-dom'

const CompanyContent = ({company}) => {

	return (
		<div>
			<section>
				<div className="space-between">
					<h4>Detail of {company.name}</h4>
					<Link to="/companies" className="waves-effect waves-light btn" id="back_to_list_btn">Back to the list</Link>
				</div>
				<h6><b>Sector : </b></h6>{company.sector}
				<h6><b>Siren : </b></h6>{company.siren}
			</section>

			<hr/>

			<section>
				<h5>Results</h5>
			</section>
		</div>
	)
}

export default CompanyContent