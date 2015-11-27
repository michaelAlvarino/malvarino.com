import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router'

export default class MaNavbar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container container-fluid">
					<ul className="nav nav-pills">
						<li><Link to="/"><p>Home</p></Link></li>
						<li role="presentation"><Link to="/About-Me"><p>About Me</p></Link></li>
						<li role="presentation"><a href="http://imbadatcleverurls.blogspot.com/"><p>My Blog!</p></a></li>
						<li role="presentation"><Link to="/DraggableGraph"><p>Draggable Graph</p></Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}