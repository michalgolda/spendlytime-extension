import { combineReducers } from 'redux';
import { tracesReducer} from './traces.reducer';
import { browserDataReducer } from './browserData.reducer';
import { userReducer } from './user.reducer';
import { timeEntryReducer } from './timeEntry.reducer';

export const rootReducer = combineReducers({
    traces: tracesReducer,
    browserData: browserDataReducer,
    user: userReducer,
    timeEntry: timeEntryReducer
});