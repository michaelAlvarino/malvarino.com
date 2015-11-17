import React, {Component, PropTypes} from 'react';

export default class Experience extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				<p>{this.props.companyName}</p>
			</div>
		);
	}
}

Experience.props =
