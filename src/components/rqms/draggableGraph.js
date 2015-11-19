import React, {Component} from 'react';
import Draggable from 'react-draggable';
import graph from './graph';

export default class DraggableGraph extends Component{

	render(){
		return(
			<Draggable
                axis="both"
                start={{x: 0, y: 0}}
                moveOnStartChange={false}
                grid={[25, 25]}
                zIndex={100}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="colormesilly">
                    <h1>putsomecool graph in here</h1>
                </div>
            </Draggable>	
        );
	}
}