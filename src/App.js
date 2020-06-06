import React, { Component } from 'react';
import TodoItems from './Components/todoItems';
import AddItems from './Components/addItems';


import './App.css';



class App extends Component{
  state ={
    items :[
      {id:1 ,name:'mahmoud',age:22},
      {id:2 ,name:'nabil',age:25},
      {id:3 ,name:'rashad',age:26},
  
    ]
  }
  render(){
    return(
     <div>
     <TodoItems  items={this.state.items}/>
     <AddItems />
     </div>
      

    )
  }
}


export default App;
