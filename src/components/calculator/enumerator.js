import React, {Component, PropTypes} from 'react'

export default class Enumerator extends Component{
	constructor(props){
		super(props);
		this.state = { arrays: props.toEnumerate,
		 	classProp: props.classProp};
	}
  componentWillReceiveProps(nextProps){
    this.setState({ arrays: nextProps.toEnumerate,
		 	classProp: nextProps.classProp
		});
  }
	render(){
		let rows = [];
		let k = 0;
		this.state.arrays.map((val) => {
			rows.push(
				<p key={k}>
					{val.toString()}
					<br/>
				</p>);
			k++;
		});
		return(
			<div className={this.state.classProp}>
				{rows}
			</div>
		);
	}
}
