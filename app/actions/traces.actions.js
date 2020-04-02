import { tracesConstants } from '../constants';
import ApiClient from '../api';


const apiClient = new ApiClient();

export function fetchTraces(){
    return dispatch => {
        dispatch(request());

        apiClient.get('traces', {})
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: tracesConstants.FETCH_TRACES_REQUEST } };
    function success(response) { return { type: tracesConstants.FETCH_TRACES_SUCCESS, data: response } };
    function failure() { return { type: tracesConstants.FETCH_TRACES_ERROR } };
}

export function addTrace(data){
    return dispatch => {
        dispatch(request());

        apiClient.post('traces/', { body: JSON.stringify(data) })
            .then(
                response => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: tracesConstants.ADD_TRACE_REQUEST } };
    function success() { return { type: tracesConstants.ADD_TRACE_SUCCESS } };
    function failure() { return { type: tracesConstants.ADD_TRACE_ERROR } };
}