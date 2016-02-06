import React, {Component} from 'react';
import {Router, Route, Link} from 'react-router';
import HomeButton from './home/homeButton';
import Store from '../store/reduxStore';

export default class Home extends Component{
	render(){
		return(
			<div className="Home">
				<HomeButton/>
				<ul className="row">
					<li className="clickcube"><Link to="/About-Me"><p>About Me</p></Link></li>
					<li className="clickcube"><a href="http://imbadatcleverurls.blogspot.com/"><p>My Blog!</p></a></li>
				</ul>
				<ul className="row">
					<li className="clickcube"><Link to="/Calculator"><p>Calculator</p></Link></li>
					<li className="clickcube"><Link to="/DraggableGraph"><p>Draggable Graph</p></Link></li>
				</ul>
			</div>
		);
	}
}
