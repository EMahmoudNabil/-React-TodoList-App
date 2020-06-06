import React, { Component } from 'react';

import '../App.css';


 class AddItems extends Component{

    state={
        name:'',
        age:''
    }

    handleChange =(e)=>{
        e.target.value !== ''
            ? this.setState({
            [e.target.id] :e.target.value
            })
             :
             alert("the field is empaty")
               
                   

    }
    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.addItem(this.state) 
        this.setState(
            {name:'',
            age:''}
        )

    }

     render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="name" placeholder="enter your name" onChange={this.handleChange}  value={this.state.name}/>
                    <input type="number" id="age" placeholder="enter your age" onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="add" />

                </form>
            </div>
    
        )
    }
    }




export default AddItems;