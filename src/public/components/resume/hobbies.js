import React, { Component } from 'react';

export default class Hobbies extends Component{
	render(){
		return(
			<div className="Hobbies">
			    <div><h1><p>Hobbies</p></h1></div>
			    <ul>
					<li><p className="ResumeFont">Reading</p></li>
					<li><p className="ResumeFont">Bayonne Bombers Rugby Club</p></li>
					<li><p className="ResumeFont">Cornell Rugby Football Club</p></li>
					<li><p className="ResumeFont">Snowboarding</p></li>
					<li><p className="ResumeFont">Running and Exercising</p></li>
			    </ul>
			</div>
		);
	}
}