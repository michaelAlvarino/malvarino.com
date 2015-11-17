
import React, { Component } from 'react';

export default class Education extends Component{
	render(){
		return(	
			<div>
				<div className="page-header"><h1>Education</h1></div>
			    <table className="table" >
			      <thead>
			        <tr>
			          <th>University</th>
			          <th>Degree</th>
			          <th>Time</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>Columbia University, School of Continuing Education</td>
			          <td>Graduate Foundations, PostBacc</td>
			          <td>September 2015 - Current</td>
			        </tr>
			        <tr>
			          <td>Cornell University, School of Arts and Sciences</td>
			          <td>Bachelors of Mathematics</td>
			          <td>September 2010 - May 2013</td>
			        </tr>
			        <tr>
			          <td>Cornell University, School of Arts and Sciences</td>
			          <td>Bachelors of Economics</td>
			          <td>September 2010 - May 2013</td>
			        </tr>
			        <tr>
			          <td>Rutgers University</td>
			          <td>Transferred</td>
			          <td>September 2009 - May 2010</td>
			        </tr>
			      </tbody>
			    </table>
			</div>
		);
	}
}