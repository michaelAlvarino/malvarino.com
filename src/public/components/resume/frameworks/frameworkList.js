
import React, { Component } from 'react';

export default class FrameworkList extends Component{
	render(){
		return(
				<ul className="FrameworkList">
					<li><p className="ResumeFont">React.js</p></li>
					<li><p className="ResumeFont">Node.js/Express.js</p></li>
					<li><p className="ResumeFont">Gulp</p></li>
					<li><p className="ResumeFont">Sass</p></li>
					<li><p className="ResumeFont">Proprietary Frameworks</p></li>
					<li><p className="ResumeFont">AngularJs</p></li>
					<li><p className="ResumeFont">Bootstrap</p></li>
				</ul>
		);
	}
}