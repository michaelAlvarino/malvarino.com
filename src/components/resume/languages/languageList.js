import React, { Component } from 'react';

export default class LanguageList extends Component{
	render(){
		return(
			<ul className="LanguageList">
				<li><p className="ResumeFont">Java</p></li>
				<li><p className="ResumeFont">Javascript</p></li>
				<li><p className="ResumeFont">C#.NET</p></li>
				<li><p className="ResumeFont">SQL</p></li>
			</ul>
		);
	}
}