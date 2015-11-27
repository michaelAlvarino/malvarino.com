import React, { Component } from 'react'; 
import Contact from './contact';
import Education from './education';
import Languages from './languages/languages';
import Frameworks from './frameworks/frameworks';
import WorkExperience from './workExperience/workExperience';
import Hobbies from './hobbies';
import MaNavbar from '../shared/maNavbar'

export default class Resume extends Component{
	render(){
		return(
			<div className="container">
				<MaNavbar/>
				<Contact/>
				<Education/>
				<div className="container">
					<div className='col-s-12 col-md-6'>
						<Languages/>
					</div>
					<div className='col-s-12 col-md-6'>
						<Frameworks/>
					</div>
				</div>
    			<WorkExperience/>
    			<Hobbies/>
			</div>
		);
	}
}