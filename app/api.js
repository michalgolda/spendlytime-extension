import { config } from './config';
import { history } from './helpers';

/** The class using for calling to api */
export default class ApiClient{

    constructor(resFormat = 'json'){
        this._resFormat = resFormat;
    }

    _prepareUrl(endpoint){
        /**
         * This function is prepare final request string url
         *
         * @param {string} endpoint - The string resource name
         *
         * @return {string} Return prepared url
         */
        return `${config.api_url}/${endpoint}?format=${this._resFormat}`;
    }

    _handleResponse(response){
        /**
         * This function is convert text data to json
         *
         * @param {Response} response - The Response object
         *
         * @return {Object} Return converted text data to json
         */
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if(!response.ok){
                // 403 or 401 because api is support to types of authentication
                if(response.status === 403 || response.status === 401){
                    history.push('/login');
                }
                const error = data.error.message;
                return Promise.reject(error);
            }

            return data;
        });
    }

    get(endpoint, payload){
        payload.method = 'GET';
        return fetch(this._prepareUrl(endpoint), payload).then(this._handleResponse);
    }

    post(endpoint, payload){
        payload.method = 'POST';
        payload.headers = {
            'Content-Type': 'application/json'
        }
        return fetch(this._prepareUrl(endpoint), payload).then(this._handleResponse);
    }

    delete(endpoint, payload){
        payload.method = 'DELETE';
        return fetch(this._prepareUrl(endpoint), payload).then(this._handleResponse);
    }

    get resFormat(){
        return this._resFormat;
    }

    set resFormat(value){
        this._resFormat = value;
    }
}
