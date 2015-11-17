
import React, { Component } from 'react';
import FrameworkList from './frameworkList';

export default class Frameworks extends Component{
	render(){
		return(
			<div className="hidden-sm">
			    <div className="page-header"><h1>Frameworks I'm Familiar With</h1></div>
			    <FrameworkList/>
			</div>
		);
	}
}