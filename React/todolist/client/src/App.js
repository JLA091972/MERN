import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React, { useState } from "react";

import Todo from "./components/Todo";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();   //do not refresh the page

    if (newTodo.length === 0) { return; }  //do not add if empty string

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem])
    setNewTodo("");
  }

  const handleTaskComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  const handleTodoDelete = (idx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != idx;
    });
    setTodos(filteredTodos)

  }

  return (
    <div className="App" >
      <h1> TO DO list</h1>
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }}>

        <br />
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }}
          type="text"
          value={newTodo}
        />
        <button>Add</button>
      </form>
      <br />
      {
        todos.map((todo, i) => {

          return (
            <Todo 
            key={i} 
            i={i} 
            todo = {todo} 
            handleTaskComplete={handleTaskComplete} 
            handleTodoDelete={handleTodoDelete}/>
          )
        })
      }

    </div>
  );
}

export default App;
