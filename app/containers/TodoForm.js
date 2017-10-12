import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createTodo } from '../actions/actions';
import axios from 'axios';
import request from 'superagent';

import style from './App.css';

class TodoForm extends Component {
    handleSubmit(e) {
        var data = this.refs.todo.value;

        e.preventDefault();
        request
            .post('http://todos.stoplight.io/todos?apikey=123')
            .send({ name: data })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (err || !res.ok) {
                    alert('Oh no! error');
                } else {
                    console.log('successfully posted todo');
                }
            });
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

export default reduxForm({
    form: "TodoForm",
    fields: ['todo']
}, null)(TodoForm);