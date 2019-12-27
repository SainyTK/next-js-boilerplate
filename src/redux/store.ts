import { createStore, applyMiddleware, DeepPartial } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';
import thunk from 'redux-thunk';

export function initializeStore(initialState: DeepPartial<{}> = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}