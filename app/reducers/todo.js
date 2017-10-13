import { REQUEST_TODOS, RECEIVE_TODOS, NEW_TODO } from '../actions/actions.js';

export default function( state = {
    isFetching: false,
    response: null
}, action) {
    switch (action.type) {
    case REQUEST_TODOS:
        return Object.assign({}, state, {
            isFetching: true
        })
    case RECEIVE_TODOS:
        return Object.assign({}, state, {
            isFetching: false,
            response: action.payload
        })
    case NEW_TODO:
        return Object.assign({}, state, {
            isFetching: false,
            response: action.payload
        })
    }
    return state;
}