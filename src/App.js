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


  deleteItem=(id)=>{
    let items =this.state.items.filter((item)=>{
    return item.id !== id
   })
    this.setState({items})
  }

  addItem =(item)=>{
    item.id =Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }
  render(){
    return(
     <div>
     <TodoItems  items={this.state.items} deletItem={this.deleteItem}/>
     <AddItems addItem={this.addItem} />
     </div>
      

    )
  }
}


export default App;
