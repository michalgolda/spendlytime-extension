import { userConstants } from '../constants';

const initialState = { loading: false, data: null };
export function userReducer(state = initialState, action){
    switch(action.type){
        case userConstants.FETCH_USER_DATA_REQUEST:
            return {
                loading: true
            };
        case userConstants.FETCH_USER_DATA_SUCCESS:
            return {
                loading: false,
                data: action.data
            }
        case userConstants.FETCH_USER_DATA_ERROR:
            return state;
        default:
            return state;
    }
}
