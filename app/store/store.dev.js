import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}