import React from 'react';

class App extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         data: "Initial State"
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(){
      this.setState({data: "Data update from child Component"})
   }

   render() {
      return (
         <div>
         	<Content myDataProp = {this.state.data}
               updateStateProp = {this.updateState}/> 
         </div>
      );
   }
}

class Content extends React.Component {
   render(){
      return(
         <div>
            <button onClick = {this.props.updateStateProp}>CLICK</button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default App;