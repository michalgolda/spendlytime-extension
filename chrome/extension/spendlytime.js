import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/Root';
import createStore from '../../app/store';

chrome.storage.local.get('state', (obj) => {
    const { state } = obj;
    const initialState = state;

    ReactDOM.render(<Root store={createStore(initialState)} />, document.getElementById('root'));
  });
