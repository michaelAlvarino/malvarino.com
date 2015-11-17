import React, { Component, PropTypes } from 'react';
export default class WorkExperience extends Component{
	constructor(props){
		super(props);
    	this.state = {isiGlyphIconType: props.isiGlyphIconType};		
	}
	render(){
		return(
			<div >
				<div className="page-header"><h1>Work Experience</h1></div>
				<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					<div className="panel panel-default">
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							<div className="panel-heading" role="tab" id="headingOne">
									<h4 className="container panel-title">Informetric Systems</h4>
							</div>
						</a>
					<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
						<div className="panel-body">
							<ul>
								<li>Created and maintained custom application installation kits for a strategic business partner</li>
								<li>Developed a database interfacing application using an internal framework that reduced the need for technical support and improved product consistency accross sites</li>
								<li>Helped design and develop a database interfacing application to process hundreds of gigabytes of image metadata</li>
								<li>Implemented application changes to the client application on as short notice as 5 days</li>
								<li>Refreshed product documentation for delivery to every customer and each new install</li>
								<li>Responsible for technical support and technical communication accross five client sites</li>
								<li>Handled technical support 24x7 during pager duty</li>
								<li>Visited client sites as a technical resource and representative of Informetric</li>								
							</ul>
						</div>
					</div>
				</div>
				<div className="panel panel-default">
					<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						<div className="panel-heading" role="tab" id="headingTwo">
								<h4 className="container panel-title">
									Campus Evolution Villages
								</h4>
						</div>
					</a>
					<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
						<div className="panel-body">
							<ul>
								<li>Evaluated businesses for investment potential</li>
								<li>Advised portfolio companies in how to best allocate their time and employees</li>
								<li>Compiled a database of 150 entrepreneurship program contacts at universities accross the US </li>
							</ul>
						</div>
					</div>
				</div>
				<div className="panel panel-default">
					<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						<div className="panel-heading" role="tab" id="headingThree">
							<h4 className="container panel-title">
								La Buena Onda
							</h4>
						</div>
					</a>
					<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
						<div className="panel-body">
							<ul>
								<li>Created an accounting projection to 10 years showing the time until break even on investment</li>
								<li>Performed a cost analysis that showed kitchen employees were not stealing food as suspected</li>
								<li>Created a new website using free online tools</li>
								<li>Implemented a new point of service system to better manage revenues and costs</li>
								<li>Learned about Nicaraguan culture by meeting locals and travelers, and volunteering to help teach at a local school</li>
								<li>Perfected Spanish business skills</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
WorkExperience.propTypes = { isiGlyphIconType: React.PropTypes.string };
WorkExperience.defaultProps = { isiGlyphIconType: "glyphicon glyphicon-chevron-down" };