import axios from 'axios';

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

export const CREATE_POST = 'CREATE_POST';
export function createTodo() {
    const request = axios.post(ROOT_URL);

    return {
        type: CREATE_POST,
        payload: request
    }
}
