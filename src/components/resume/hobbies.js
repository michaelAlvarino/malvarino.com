import React, { Component } from 'react';

export default class Hobbies extends Component{
	render(){
		return(
			<div>
			    <div className="page-header"><h1>Hobbies</h1></div>
			    <ul>
			      <li>Reading</li>
			      <li>Rugby</li>
			      <ul>
			        <li>Bayonne Bombers</li>
			        <li>Cornell Rugby Football Club</li>
			      </ul>
			      <li>Snowboarding</li>
			      <li>Running and Exercising</li>
			    </ul>
			</div>
		);
	}
}