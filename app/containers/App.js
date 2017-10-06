import React from 'react';
import { connect } from 'react-redux';

import style from './App.css';
import TodoList from './TodoList';


class App extends React.Component {
  render() {
    const { swagger } = this.props;
  
    return (
      <div className={style.App}>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

export default connect(mapStateToProps)(App);
