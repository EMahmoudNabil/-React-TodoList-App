import React, { Component } from 'react';
import TodoItems from './Components/todoItems';
import AddItems from './Components/addItems';


import './App.css';



class App extends Component{
  render(){
    return(
     <div>
     <TodoItems />
     <AddItems />
     </div>
      

    )
  }
}


export default App;
