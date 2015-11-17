
import React, { Component } from 'react';
import LanguageList from './languageList';

export default class Languages extends Component{
	render(){
		return(	
			<div>
				<div className="page-header"><h1>Languages I've Used</h1></div>
			    <LanguageList/>
		    </div>
		);
	}
}