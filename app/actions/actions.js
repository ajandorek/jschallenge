import axios from 'axios';
import request from 'superagent';

const ROOT_URL = 'http://todos.stoplight.io/todos?apikey=123'

export const REQUEST_TODOS = 'REQUEST_TODOS';
export function requestTodos() {
    return {
        type: REQUEST_TODOS
    }
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export function receiveTodos(data) {
    return {
        type: RECEIVE_TODOS,
        payload: data
    }
}

export function fetchTodos() {
    return function (dispatch) {
        dispatch(requestTodos());
        return axios.get(ROOT_URL)
            .then(response => {
                if (response.status >= 400) {
                    dispatch('Unable to grab todos');
                }
                return response;
            })
            .then(data => {
                dispatch(receiveTodos(data))
            });
    }
}

export const NEW_TODO = 'NEW_TODO';
export function newTodo(props) {
    const request = axios({
        method: 'post',
        url: 'http://todos.stoplight.io/todos?apikey=123',
        data: {
            name: props
        }
    });
    return {
        type: NEW_TODO,
        payload: request
    }
}








        // return request
        //     .post('http://todos.stoplight.io/todos?apikey=123')
        //     .send({ name: todo })
        //     .set('Accept', 'application/json')
        //     .end(function (err, res) {
        //         if (err || !res.ok) {
        //             alert('Oh no! error');
        //         } else {
        //             dispatch(fetchTodos);
        //         }
        //     });
