import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './App.css';

class TodoForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className={style.App}>
                <form onSubmit={this.handleSubmit}>
                    <input />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { todo: state.todo };
}

export default connect(mapStateToProps)(TodoForm);