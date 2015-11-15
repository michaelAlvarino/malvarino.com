
import React, { Component } from 'react';
import LanguageList from './languageList';

export default class Languages extends Component{
	render(){
		return(	
			<div>
				<h2>Programming Languages I've Used</h2>
			    <LanguageList/>
		    </div>
		);
	}
}