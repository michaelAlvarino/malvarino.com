
import React, { Component } from 'react';

export default class Education extends Component{
	render(){
		return(	
			<div>
				<div className="page-header"><h1><p>Education</p></h1></div>
			    <table className="table" >
			      <thead>
			        <tr>
			          <th><p>University</p></th>
			          <th><p>Degree</p></th>
			          <th><p>Time</p></th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td><p>Columbia University, School of Continuing Education</p></td>
			          <td><p>Graduate Foundations, PostBacc</p></td>
			          <td><p>September 2015 - Current</p></td>
			        </tr>
			        <tr>
			          <td><p>Cornell University, School of Arts and Sciences</p></td>
			          <td><p>Bachelors of Mathematics</p></td>
			          <td><p>September 2010 - May 2013</p></td>
			        </tr>
			        <tr>
			          <td><p>Cornell University, School of Arts and Sciences</p></td>
			          <td><p>Bachelors of Economics</p></td>
			          <td><p>September 2010 - May 2013</p></td>
			        </tr>
			        <tr>
			          <td><p>Rutgers University</p></td>
			          <td><p>Transferred</p></td>
			          <td><p>September 2009 - May 2010</p></td>
			        </tr>
			      </tbody>
			    </table>
			</div>
		);
	}
}