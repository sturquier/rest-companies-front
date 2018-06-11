import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import CompaniesList from './companies/CompaniesList'
import CompanyDetail from './companies/CompanyDetail'

class App extends Component {
  	render() {
    	return (
      		<div>
      			<HashRouter>
      				<Switch>
      					<Route exact path="/" render={() => (
      						<Redirect to="/companies"/>
      					)}/>
      					<Route exact path="/companies" component={CompaniesList}/>
      					<Route exact path="/companies/:id" component={CompanyDetail}/>
      				</Switch>
      			</HashRouter>
      		</div>
    	);
  	}
}

export default App;
