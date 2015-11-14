// react stuff
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

// components
import Resume from './components/resume/resume';
// import Header from './components/header/header';
import NoMatch from './components/noMatch';

//
// my app component 
class MyApp extends Component{
	constructor(){
		super();
	} // constructor()
	render(){
		return(
			<div>
				<Resume/>
			</div>
		);
	} // renderer()

}

render((
  <Router>
    <Route path="/" component={ MyApp }>
      <Route path="*" component={ NoMatch }/>
    </Route>
  </Router>
), document.getElementById('app'));