import React from 'react';

import '../App.css';


 const TodoItems = (props)=> {
   const {items,deletItem} = props;
   let length =items.length;

   const ListItems = length ?
      items.map((item)=>{
        return(
          <div key={item.id}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span  className="icon action" onClick={()=> deletItem(item.id)}>&times;</span>

          </div>
        )
    }) :(
        <p> There is no Items to Show </p>
        )
    return(
        <div className="ListItem">
          <div>
            <span className="title name" >Name</span>
            <span className="title age" >Age</span>
            <span   className="title action" >Action</span>
          </div>
        {ListItems}
        </div>
  
      )
    }




export default TodoItems;