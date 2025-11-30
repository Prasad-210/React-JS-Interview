import React  from "react";

class CounterClassComponent extends React.Component{

 constructor(props){
   super(props);
   console.log("Constructor");
   this.state = { count: 0};
 }


 comonentDidMount(){
    console.log("comonentDidMount")
 }

 componentDidUpdate(){
    console.log(`🅰️ componentDidUpdate`)
 }

 componentDidUpdate(){
    console.log("⌚ componentDidUpdate");
    
 }

 render(){

    console.log("🏠render")
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={()=>this.setState({count: this.state.count + 1})}>+</button>
      </div>
    )
 }


}


export default CounterClassComponent;


