import React, {Component, PropTypes} from 'react';

export default class Graph extends Component{
  constructor(props) {
    super(props);
    this.state = {Data: props.Data};
  }
	componentDidMount(){
    var layout = {
      title: 'Mt Bruno Elevation',
      autosize: false,
      width: 500,
      height: 500,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90
      }
    };
    Plotly.newPlot('TESTER', this.state.Data, layout);
	}
	render(){
		return(
			<div>
				<div id='TESTER'></div>
			</div>
		);
	}
}

Graph.propTypes={
  Data: React.PropTypes.array
}