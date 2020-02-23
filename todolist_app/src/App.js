import React from 'react';
import Todos from "./components/Todos";
import './App.css';


class App extends React.Component {
  state= {
    todos:[
      {
        id:1,
        title: "buy milk",
        complete: false
      },
      {
        id:2,
        title: "buy cow",
        complete: false
      },
      {
        id:3,
        title: "meeting with boss",
        complete: false
      },
    ]

  }

  handleComplete =(id)=>{
    
    this.setState({todos:this.state.todos.map(todo=>{
      // debugger
      if(todo.id===id){
        todo.complete = !todo.complete
      }
      return todo
    })})
    // debugger
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
      <Todos todosList={this.state} completeBtn={this.handleComplete}/>
      </div>
    );

  }
}

export default App;
