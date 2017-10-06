import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './App.css';

class TodoList extends Component {
  render() {
    const { swagger } = this.props;
  
    return (
      <div className={style.App}>
        <h2>Todo List Component</h2>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(TodoList);