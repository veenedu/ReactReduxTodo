import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.react'
import TodoList from './components/TodoList.react'
import store from './redux/store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoForm />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
