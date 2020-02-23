import React from 'react'
import TodoItem from "./TodoItem"

class Todos extends React.Component{
    render(){
        return this.props.todosList.todos.map((todo)=>(
                <TodoItem key={todo.id} item={todo} completeBtn={this.props.completeBtn}/>
        ))
}
}


export default Todos;