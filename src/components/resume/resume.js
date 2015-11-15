import React, { Component } from 'react'; 
import Menu from './personalInfo';
import Education from './education';
import Languages from './languages/languages';
import Frameworks from './frameworks/frameworks';
import WorkExperience from './workExperience/workExperience';
import Hobbies from './hobbies';

export default class Resume extends Component{
	render(){
		return(
			<div>
				<Menu/>
				<hr/>
				<Education/>
				<hr/>
				<div className="container">
					<div className='col-s-12 col-md-6'>
						<Languages/>
					</div>
					<div className='col-s-12 col-md-6'>
						<Frameworks/>
					</div>
				</div>
    			<WorkExperience/>
    			<hr/>
    			<Hobbies/>
			</div>
		);
	}
}