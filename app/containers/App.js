import React from 'react';
import { connect } from 'react-redux';

import style from './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';


class App extends React.Component {
  render() {
    const { swagger } = this.props;
  
    return (
      <div className={style.App}>
        <h1>Todo List</h1>
        <TodoForm />
        <Todo />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

export default connect(mapStateToProps)(App);
