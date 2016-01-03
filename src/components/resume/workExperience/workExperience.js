import React, { Component, PropTypes } from 'react';

export default class WorkExperience extends Component{
	constructor(props){
		super(props);
    	this.state = {isiGlyphIconType: props.isiGlyphIconType};		
	}
	render(){
		return(
			<div className="WorkExperience">
				<h1><p>Work Experience</p></h1>
				<a href="#ISI" name="ISI" className="Informetric"><h4><p>Informetric Systems</p></h4></a>
				<ul>
					<li><p className="ResumeFont">Created and maintained custom application installation kits for a strategic business partner</p></li>
					<li><p className="ResumeFont">Developed a database interfacing application using an internal framework that reduced the need for technical support and improved product consistency accross sites</p></li>
					<li><p className="ResumeFont">Helped design and develop a database interfacing application to process hundreds of gigabytes of image metadata</p></li>
					<li><p className="ResumeFont">Implemented application changes to the client application on as short notice as 5 days</p></li>
					<li><p className="ResumeFont">Refreshed product documentation for delivery to every customer and each new install</p></li>
					<li><p className="ResumeFont">Responsible for technical support and technical communication accross five client sites</p></li>
					<li><p className="ResumeFont">Handled technical support 24x7 during pager duty</p></li>
					<li><p className="ResumeFont">Visited client sites as a technical resource and representative of Informetric</p></li>								
				</ul>
				<a href="#CEV" name="CEV" className="Campus"><h4><p>Campus Evolution Villages</p></h4></a>
				<ul>
					<li><p className="ResumeFont">Evaluated businesses for investment potential</p></li>
					<li><p className="ResumeFont">Advised portfolio companies in how to best allocate their time and employees</p></li>
					<li><p className="ResumeFont">Compiled a database of 150 entrepreneurship program contacts at universities accross the US </p></li>
				</ul>
				<a href="#LBO" name="LBO" className="BuenaOnda"><h4><p>La Buena Onda</p></h4></a>
				<ul>
					<li><p className="ResumeFont">Created an accounting projection to 10 years showing the time until break even on investment</p></li>
					<li><p className="ResumeFont">Performed a cost analysis that showed kitchen employees were not stealing food as suspected</p></li>
					<li><p className="ResumeFont">Created a new website using free online tools</p></li>
					<li><p className="ResumeFont">Implemented a new point of service system to better manage revenues and costs</p></li>
					<li><p className="ResumeFont">Learned about Nicaraguan culture by meeting locals and travelers, and volunteering to help teach at a local school</p></li>
					<li><p className="ResumeFont">Perfected Spanish business skills</p></li>
				</ul>
			</div>
		);
	}
}
WorkExperience.propTypes = { isiGlyphIconType: React.PropTypes.string };
WorkExperience.defaultProps = { isiGlyphIconType: "glyphicon glyphicon-chevron-down" };