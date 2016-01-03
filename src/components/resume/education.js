
import React, { Component } from 'react';

export default class Education extends Component{
	render(){
		return(	
			<div className="Education">
				<div className="page-header"><h1><p>Education</p></h1></div>
			    <table className="table" >
			      <thead>
			        <tr>
			          <th><p className="ResumeFont">University</p></th>
			          <th><p className="ResumeFont">Degree</p></th>
			          <th><p className="ResumeFont">Time</p></th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td><p className="ResumeFont">Columbia University, School of Continuing Education</p></td>
			          <td><p className="ResumeFont">Graduate Foundations, PostBacc</p></td>
			          <td><p className="ResumeFont">September 2015 - Current</p></td>
			        </tr>
			        <tr>
			          <td><p className="ResumeFont">Cornell University, School of Arts and Sciences</p></td>
			          <td><p className="ResumeFont">Bachelors of Mathematics</p></td>
			          <td><p className="ResumeFont">September 2010 - May 2013</p></td>
			        </tr>
			        <tr>
			          <td><p className="ResumeFont">Cornell University, School of Arts and Sciences</p></td>
			          <td><p className="ResumeFont">Bachelors of Economics</p></td>
			          <td><p className="ResumeFont">September 2010 - May 2013</p></td>
			        </tr>
			        <tr>
			          <td><p className="ResumeFont">Rutgers University</p></td>
			          <td><p className="ResumeFont">Transferred</p></td>
			          <td><p className="ResumeFont">September 2009 - May 2010</p></td>
			        </tr>
			      </tbody>
			    </table>
			</div>
		);
	}
}