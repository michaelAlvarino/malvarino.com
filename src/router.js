// react stuff
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// components
import Resume from './components/resume/resume';
import NoMatch from './components/noMatch';
import RQMSClient from './components/rqms/rqmsClient';

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={ Resume }/>
    <Route path="about-me" component={ Resume } />
	<Route path="rqms" component={RQMSClient}/>
	<Route path="*" component={ NoMatch }/>
  </Router>
), document.getElementById('app'));