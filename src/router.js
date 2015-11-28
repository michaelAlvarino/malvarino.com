// react stuff
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// components
import Resume from './components/resume/resume';
import NoMatch from './components/noMatch';
import DraggableGraph from './components/rqms/draggableGraph';
import Home from './components/home/home';
import Calculator from './components/calculator/calculator';

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={ Home }/>
    <Route path="About-Me" component={ Resume } />
	<Route path="DraggableGraph" component={ DraggableGraph }/>
	<Route path="Calculator" component={ Calculator } />
	<Route path="*" component={ NoMatch }/>
  </Router>
), document.getElementById('app'));