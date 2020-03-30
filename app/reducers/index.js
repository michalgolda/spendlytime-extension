import { combineReducers } from 'redux';
import { trace } from './trace.reducer';

export const rootReducer = combineReducers({
    trace
});