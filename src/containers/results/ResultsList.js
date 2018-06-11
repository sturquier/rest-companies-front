import React, { Component } from 'react'
import ResultsListItem from '../../components/results/ResultsListItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompanyResults } from '../../actions/companies'

class ResultsList extends Component {

	componentWillMount() {
		this.props.getCompanyResults(this.props.companyId)
	}

	renderResults() {
		const {companyResults} = this.props

		return companyResults.map((data) => {
			return <ResultsListItem key={data.id} results={data}/>
		})
	}

	render() {
		return (
			<div>
				<table className="table striped responsive-table">
					<thead>
						<tr>
							<th>CA</th>
							<th>Margin</th>
							<th>Ebitda</th>
							<th>Loss</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						{this.renderResults()}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		companyResults: state.companyResults
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getCompanyResults}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList)