import React, { Component } from 'react'
import CompaniesListItem from '../../components/companies/CompaniesListItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompanies } from '../../actions/companies'

class CompaniesList extends Component {

	componentWillMount() {
		this.props.getCompanies()
	}

	renderCompanies() {
		const {companies} = this.props

		return companies.map((data) => {
			return <CompaniesListItem key={data.id} company={data}/>
		})
	}

	render() {
		return (
			<div>
				<h4>Companies List</h4>
				<hr/>
				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Sector</th>
							<th>Siren</th>
							<th>Detail</th>
						</tr>
					</thead>
					<tbody>
						{this.renderCompanies()}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		companies: state.companies
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCompanies}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList)