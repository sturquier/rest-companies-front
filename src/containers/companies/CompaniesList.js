import React, { Component } from 'react'
import CompaniesListItem from '../../components/companies/CompaniesListItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompanies } from '../../actions/companies'

class CompaniesList extends Component {

	componentWillMount() {
		this.props.getCompanies()
	}

	render() {
		console.log(this.props.companies)
		return (
			<div>
				<h4>Companies List</h4>
				<CompaniesListItem/>
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