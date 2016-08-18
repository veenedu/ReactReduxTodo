import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.react'
import TodoList from './components/TodoList.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList tasks = {[{id:1,title:'MyTask'}]} />
      </div>
    );
  }
}

export default App;
