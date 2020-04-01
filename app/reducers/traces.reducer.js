import { tracesConstants } from '../constants';

const initialState = { loading: false, data: [] };

export function tracesReducer(state = initialState, action){
    switch(action.type){
        case tracesConstants.FETCH_TRACES_REQUEST:
            return { loading: true };
        case tracesConstants.FETCH_TRACES_SUCCESS:
            return {
                loading: false,
                data: action.data
            }
        case tracesConstants.FETCH_TRACES_ERROR:
            return { loading: false };
        default:
            return state;
    }
}