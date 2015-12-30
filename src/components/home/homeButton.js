import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router'

export default class HomeButton extends Component{
	render(){
		return(
			<Link to="/"><div className="home"><p>Home</p></div></Link>
		);
	}
}