import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newTodo, requestTodos } from '../actions/actions';
import request from 'superagent';

import style from './App.css';

class TodoForm extends Component {

    handleSubmit(e) {
        var data = this.refs.todo.value;

        e.preventDefault();
        this.props.dispatch(newTodo(data));
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="New Todo" ref="todo" />
                <input type="submit" />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { todo: state.todo };
}

export default connect(mapStateToProps)(TodoForm);