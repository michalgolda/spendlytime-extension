import { tracesConstants } from '../constants';

export function tracesReducer(state = {}, action){
    switch(action.type){
        case tracesConstants.FETCH_TRACE_REQUEST:
            return { loading: true };
        case tracesConstants.FETCH_TRACE_SUCCESS:
            return {
                loading: false,
                data: action.data
            }
        case tracesConstants.FETCH_TRACE_ERROR:
            return { loading: false };
        default:
            return state;
    }
}