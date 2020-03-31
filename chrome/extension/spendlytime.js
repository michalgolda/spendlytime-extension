import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/Root';

import './spendlytime.css';

chrome.storage.local.get('state', (obj) => {
    const { state } = obj;
    const initialState = state;

    const createStore = require('../../app/store');

    ReactDOM.render(<Root store={createStore(initialState)} />, document.getElementById('root'));
  });
