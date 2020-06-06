import React from 'react';

import '../App.css';


 const TodoItems = (props)=> {
   const {items,deletItem} = props;
   let length =items.length;

   const ListItems = length ?
      items.map((item)=>{
        return(
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span onClick={()=> deletItem(item.id)}>&times;</span>

          </div>
        )
    }) :(
        <p> There is no Items to Show </p>
        )
    return(
        <div className="ListItem">
        <div>
          <span>Name</span>
          <span>Age</span>
          <span>Action</span>
        </div>
        {ListItems}
        </div>
  
      )
    }




export default TodoItems;