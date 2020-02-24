import React from 'react';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Todos from "./components/Todos";
import AddTodo from './components/addTodo';

import './App.css';


class App extends React.Component {
  state= {
    todos:[
      {
        title: "buy milk"
      },
      {
        title: "buy cow"
      },
      {
        title: "meeting with boss"
      },
    ]

  };

  // notify = (e) => toast(
  //   "deleting"
  //   );


  handleDel =(title)=>{
    toast("deleting "+title)
    setInterval(()=>{
      this.setState(
        {todos:[...this.state.todos.filter(todo=>
        todo.title!==title)],}
        )
    },5000

    )
  }
  addTodo=(input)=>{
    this.setState({todos:[...this.state.todos, {title:input}]})
  }

  render(){
    // console.clear()
    console.log(this.state)

    return (
      <div className="App">
      <AddTodo addTodo={this.addTodo}/>
      <Todos todosList={this.state} delBtn={this.handleDel}/>
      <ToastContainer/>
      </div>
    );

  }
}

export default App;
