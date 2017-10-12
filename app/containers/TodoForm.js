import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createTodo, requestTodos } from '../actions/actions';
import request from 'superagent';

import style from './App.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(requestTodos);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ todo: nextProps.todo });
    }

    handleSubmit(e) {
        var data = this.refs.todo.value;

        e.preventDefault();
        createTodo(data);
        // request
        //     .post('http://todos.stoplight.io/todos?apikey=123')
        //     .send({ name: data })
        //     .set('Accept', 'application/json')
        //     .end(function (err, res) {
        //         if (err || !res.ok) {
        //             alert('Oh no! error');
        //         } else {
        //             requestTodos();
        //         }
        //     });
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