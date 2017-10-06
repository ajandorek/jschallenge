import { combineReducers } from 'redux';

import swagger from './swagger';
import todo from './todo';

export default combineReducers({ swagger, todo });
