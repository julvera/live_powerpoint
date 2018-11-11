import { combineReducers } from 'redux';
import selectedReducer from './selectedReducer';
import updateModelReducer from './updateModelReducer';
import commandReducer from './commandReducer';
/*
reducer that can contains set of reducer, usefull when several reducers are used at a timeS
*/
const globalReducer = combineReducers({
    selectedReducer: selectedReducer,
    updateModelReducer: updateModelReducer,
    commandReducer: commandReducer,
});
export default globalReducer;