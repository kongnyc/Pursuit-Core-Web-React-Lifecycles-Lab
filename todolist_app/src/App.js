import React from 'react';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Todos from "./components/Todos";
import AddTodo from './components/addTodo';

import './App.css';


class App extends React.Component {
  state= {
    todos:[]

  };

  handleDel =(title)=>{
    toast("deleting "+title);

    let deleting =setInterval(()=>{
      this.setState(
        {todos:[...this.state.todos.filter(todo=>
          todo.title!==title)],}
          )
        },5000)
        
    // toast.onChange(()=>(clearInterval(deleting)))

  }
  addTodo=(input)=>{
    this.setState({todos:[...this.state.todos, {title:input}]})
  }

  render(){
    // console.clear()
    console.log(this.state)

    return (
      <div className="App">
      <h1>Todos List</h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todosList={this.state} delBtn={this.handleDel}/>
      <ToastContainer/>
      </div>
    );

  }
}

export default App;
