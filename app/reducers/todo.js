import { REQUEST_TODOS, RECEIVE_TODOS, FETCH_TODOS } from '../actions/actions.js';

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
    }
    return state;
}

// export default function(state = [], action) {
//     console.log(state);
//     switch (action.type) {
//     case FETCH_TODOS: 
//         return [ action.payload.data, ...state ];
//     }
    
//     return state;
// }