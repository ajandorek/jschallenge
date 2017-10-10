import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/actions';

import style from './App.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchTodos());
    }

    renderTodo(data) {
        const message = data.name;

        return(
            <ul>
                <li>{message}</li>
            </ul>
        )
    }

    render() {
        const { swagger } = this.props;

        return (
            <div className={style.App}>
                {this.props.todo.response.data.map(this.renderTodo)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todo: state.todo };
}

export default connect(mapStateToProps)(Todo);