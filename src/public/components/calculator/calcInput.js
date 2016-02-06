import React, {Component, PropTypes} from 'react'
import Store from '../../store/reduxStore'

export default class CalcInput extends Component{
  constructor(props){
    super(props);
    this.handleChange.bind(this);
    this.state = {val: props.solution};
    Store.subscribe(this.render.bind(this));
  }
  componentWillReceiveProps(nextProps){
    this.setState({val: nextProps.solution});
  }
	handleChange(event) {
		if(!!event){this.setState({val: event.target.value})};
	}
  render(){
    return(
      <input className="CalcInput" type="text" onChange={this.handleChange.bind(this)}	value={this.state.val} placeholder="Expression"></input>
    )
  }
}
CalcInput.propTypes = { calculator: React.PropTypes.number };
CalcInput.defaultProps = { calculator: 0 };
