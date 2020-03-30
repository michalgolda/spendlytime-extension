import { traceConstants } from '../constants';

const initialState = { loading: false, data: null };

export function trace(state = initialState, action){
    switch(action.type){
        case traceConstants.FETCH_TRACE_REQUEST:
            return { loading: true };
        case traceConstants.FETCH_TRACE_SUCCESS:
            return {
                loading: false,
                data: action.data
            }
        case traceConstants.FETCH_TRACE_ERROR:
            return { loading: false };
        default:
            return state;
    }
}