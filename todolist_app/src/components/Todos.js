import React from 'react'
import TodoItem from "./TodoItem"

class Todos extends React.Component{
    render(){
        return this.props.todosList.todos.map((todo)=>(
                <TodoItem key={todo.title} item={todo} delBtn={this.props.delBtn}/>
        ))
}
}


export default Todos;