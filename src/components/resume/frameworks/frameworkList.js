
import React, { Component } from 'react';

export default class FrameworkList extends Component{
	render(){
		return(
				<ul className="FrameworkList">
					<li><p>React.js</p></li>
					<li><p>Node.js/Express.js</p></li>
					<li><p>Gulp</p></li>
					<li><p>Sass</p></li>
					<li><p>Proprietary Frameworks</p></li>
					<li><p>AngularJs</p></li>
					<li><p>Bootstrap</p></li>
				</ul>
		);
	}
}