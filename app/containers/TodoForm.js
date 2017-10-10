import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createTodo } from '../actions/actions';
import axios from 'axios';

import style from './App.css';

class TodoForm extends Component {
    handleSubmit(e) {
        console.log(JSON.stringify(this.refs.todo.value));
        e.preventDefault();
        fetch('http://todos.stoplight.io/todos?apikey=123', {
            method: 'POST',
            data: {
                name: JSON.stringify(this.refs.todo.value)
            }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
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
    // render() {
    //     const { pristine, reset, submitting }
    //     const { todo } = this.props;
    //     return (
    //         <div className={style.App}>
    //             <form onSubmit={handleSubmit()}>
    //                 <label>Add New Todo</label>
    //                 <Field
    //                     name="todo"
    //                     component="input"
    //                     type="text"
    //                     placeholder="New Todo"
    //                 />
    //                 <button type="submit" disabled={ pristine || submitting }>Submit</button>
    //             </form>
    //         </div>
    //     );
    // }
}

function mapStateToProps(state) {
    return { todo: state.todo };
}

export default reduxForm({
    form: "TodoForm",
    fields: ['todo']
}, null)(TodoForm);