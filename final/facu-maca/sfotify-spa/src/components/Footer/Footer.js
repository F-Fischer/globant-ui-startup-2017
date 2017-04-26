import React, { Component } from 'react';

class Footer extends React.Component{
	render(){
		return(
			<footer>  {this.props.text}  </footer>
			);
	}
}

export default Footer;
