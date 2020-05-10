import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//above "as" only done to avoid confusion (too many "reducers")
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});