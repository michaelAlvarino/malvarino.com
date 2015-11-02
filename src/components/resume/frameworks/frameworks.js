
import React, { Component } from 'react';
import FrameworkList from './frameworkList';

export default class Frameworks extends Component{
	render(){
		return(
			<div>
			    <h2>Web Frameworks I'm Familiar With</h2>
			    <FrameworkList/>
			</div>
		);
	}
}