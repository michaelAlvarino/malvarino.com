import React, {Component} from 'react'
import MaNavbar from '../shared/maNavbar'

export default class Home extends Component{
	render(){
		return(
			<div className="container">
				<MaNavbar/>
				<div className="jumbotron">
				<p>Welcome to my webpage! This is the home of all my development projects, proof of concepts, and links to my favorite resources. Hopefully through this you can learn a little about development and a little about myself.</p>
				</div>
			</div>
		);
	}
}