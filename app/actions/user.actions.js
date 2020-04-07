import { userConstants } from '../constants';
import ApiClient from '../api';

const apiClient = new ApiClient();

export function fetchUserData(){
    return dispatch => {
        dispatch(request());

        apiClient.get("users/me", {})
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure());
                }
            )
    }

    function request() { return { type: userConstants.FETCH_USER_DATA_REQUEST } };
    function success(data) { return { type: userConstants.FETCH_USER_DATA_SUCCESS, data: data } };
    function failure() { return { type: userConstants.FETCH_USER_DATA_ERROR } };
}