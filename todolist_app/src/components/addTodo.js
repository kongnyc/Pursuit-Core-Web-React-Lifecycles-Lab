import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        input:""
    }

handleChange=(e)=>{
    this.setState({input:e.target.value})
}
    
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.input)
    this.setState({input:""})
}

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="add a ToDo..."/>
            </form>
        )
    }
}

export default AddTodo
