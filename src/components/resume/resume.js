import React, { Component } from 'react'; 
import Menu from './personalInfo';
import Education from './education';
import Languages from './languages/languages';
import Frameworks from './frameworks/frameworks';
import WorkExperience from './workExperience';
import Hobbies from './hobbies';

export default class Resume extends Component{
	render(){
		return(
			<div>
				<Menu/>
				<hr/>
				<Education/>
				<hr/>
				<div className='pure-g'>
					<div className='pure-u-lg-1-2'>
						<div className='l-box'>
							<Languages/>
						</div>
					</div>
					<div className='pure-u-lg-1-2'>
						<div className='l-box'>
							<Frameworks/>
						</div>
					</div>
    			</div>
    			<WorkExperience/>
    			<hr/>
    			<Hobbies/>
			</div>
		);
	}
}