import React from 'react'

const CompanyContent = ({company}) => {

	return (
		<div>
			<section>
				<h4>Detail of {company.name}</h4>
				<p>Sector : {company.sector}</p>
				<p>Siren : {company.siren}</p>
			</section>

			<hr/>

			<section>
				<h5>Results</h5>
			</section>
		</div>
	)
}

export default CompanyContent