import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/actions.js';

export default function( state = {
    isFetching: false,
    data: null
}, action) {
    switch (action.type) {
    case REQUEST_TODOS:
        return Object.assign({}, state, {
            isFetching: true
        })
    case RECEIVE_TODOS:
        return Object.assign({}, state, {
            isFetching: false,
            data: action.payload
        })
    }
    return state;
}