import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication';
const rootReducer = combineReducers({
  authenticated: AuthenticationReducer
});

export default rootReducer;
