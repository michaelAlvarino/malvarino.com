import React, {Component} from 'react'
import {Router, Route, Link} from 'react-router'

export default class HomeButton extends Component{
	render(){
		return(
			<Link className="home" to="/"><div><p>Home</p></div></Link>
		);
	}
}