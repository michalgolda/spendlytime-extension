import { timeEntryConstants } from '../constants';

const initialState = { error: null, items: {}, loading: false };
export function timeEntryReducer(state = initialState, action){
    switch(action.type){
        case timeEntryConstants.START_ENTRY_REQUEST:
            return {
                loading: true
            };
        case timeEntryConstants.START_ENTRY_SUCCESS:
            return { loading: false, items: {[action.data.tid]: {...action.data}} };
        case timeEntryConstants.START_ENTRY_FAILURE:
            return { loading: false, error: action.error };
        case timeEntryConstants.STOP_ENTRY_REQUEST:
            return {
                loading: true
            };
        case timeEntryConstants.STOP_ENTRY_SUCCESS:
            return {
                loading: false,
                items: {[action.data.id]: {...action.data}}
            };
        case timeEntryConstants.STOP_ENTRY_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}