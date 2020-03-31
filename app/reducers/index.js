import { combineReducers } from 'redux';
import { tracesReducer} from './traces.reducer';
import { browserDataReducer } from './browserData.reducer';

export const rootReducer = combineReducers({
    traces: tracesReducer,
    browserData: browserDataReducer
});