import React, { Component } from 'react'
import CompanyContent from '../../components/companies/CompanyContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompany } from '../../actions/companies'

class CompanyDetail extends Component {

	componentWillMount() {
		this.props.getCompany(this.props.match.params.id)
	}

	renderCompanyContent() {
		const {company} = this.props

		if (company) {
			return <CompanyContent company={this.props.company}/>
		}
	}

	render() {
		return (
			<div>
				{this.renderCompanyContent()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		company: state.activeCompany
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCompany}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail)