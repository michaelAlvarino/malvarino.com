// react stuff
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

// components
import Resume from './components/resume/resume';
import Header from './components/header/header';
import NoMatch from './components/noMatch';

class MyApp extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<Header/>
				<Resume/>
			</div>
		);
	}
}

render((
  <Router>
    <Route path="/" component={ MyApp }>
      <Route path="*" component={ NoMatch }/>
    </Route>
  </Router>
), document.getElementById('app'));