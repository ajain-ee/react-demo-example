import React from 'react';

class App extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {
   		 headerProp: "Header from props...",
   		 contentProp: "Content from props..."
   	}
   }
   
   render(){
   	 return(
   	 	<div>
   	 		<Header headerProp = {this.state.headerProp}/>
   	 		<Content contentProp = {this.state.contentProp} />
   	 	</div>
   	 );
   }
}

class Header extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.headerProp}</h1>
			</div>
		);
	}

}

class Content extends React.Component {
	render() {
		return(
			<div>
				<h2>{this.props.contentProp}</h2>
			</div>
		);
	}

}

export default App;