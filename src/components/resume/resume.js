import React, { Component } from 'react'; 
import Contact from './contact';
import Education from './education';
import Languages from './languages/languages';
import Frameworks from './frameworks/frameworks';
import WorkExperience from './workExperience/workExperience';
import Hobbies from './hobbies';
import HomeButton from '../home/homeButton';

export default class Resume extends Component{
	render(){
		return(
			<div>
				<HomeButton/>
				<div className="Resume">
					<Contact/>
					<Education/>
					<div className="flex">
						<div className='flexItem'>
							<Languages/>
						</div>
						<div className='flexItem'>
							<Frameworks/>
						</div>
					</div>
	    			<WorkExperience/>
	    			<Hobbies/>
				</div>
			</div>
		);
	}
}