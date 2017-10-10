import { combineReducers } from 'redux';

import swagger from './swagger';
import todo from './todo';
import { reducer as form } from 'redux-form';

export default combineReducers({ swagger, todo, form });
