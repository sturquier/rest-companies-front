import React, { Component } from 'react'
import ResultsListItem from '../../components/results/ResultsListItem'
import ResultsGraphItem from '../../components/results/ResultsGraphItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompanyResults } from '../../actions/companies'

class ResultsList extends Component {

	componentWillMount() {
		this.props.getCompanyResults(this.props.companyId)
	}

	sortResultsByYear() {
		const {companyResults} = this.props;

		return companyResults.sort(function(k, v) {
			return k.year - v.year
		})
	}

	renderResultsAsTable() {
		const sortedResults = this.sortResultsByYear()

		return sortedResults.map((data) => {
			return <ResultsListItem key={data.id} results={data}/>
		})
	}

	renderResultsAsGraph() {
		const sortedResults = this.sortResultsByYear()
		
		return <ResultsGraphItem results={sortedResults}/>
	}

	render() {
		return (
			<div>
				<h5>Results List</h5>
				
				<br/>

				<section>
					<h6>As table</h6>
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
						<tbody>{this.renderResultsAsTable()}</tbody>
					</table>
				</section>

				<section>
					<h6>As graph</h6>
					<br/>
					<div>{this.renderResultsAsGraph()}</div>
				</section>

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