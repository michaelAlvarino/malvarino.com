import React, { Component } from 'react';

export default class LanguageList extends Component{
	render(){
		return(
			<ul className="LanguageList">
				<li><p>Java</p></li>
				<li><p>Javascript</p></li>
				<li><p>C#.NET</p></li>
				<li><p>SQL</p></li>
			</ul>
		);
	}
}