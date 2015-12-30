
import React, { Component } from 'react';
import LanguageList from './languageList';

export default class Languages extends Component{
	render(){
		return(	
			<div>
				<h1><p>Languages I've Used</p></h1>
			    <LanguageList/>
		    </div>
		);
	}
}