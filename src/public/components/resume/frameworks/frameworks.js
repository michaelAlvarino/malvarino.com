
import React, { Component } from 'react';
import FrameworkList from './frameworkList';

export default class Frameworks extends Component{
	render(){
		return(
			<div className="Frameworks">
			    <h1><p>Frameworks I'm Familiar With</p></h1>
			    <FrameworkList/>
			</div>
		);
	}
}