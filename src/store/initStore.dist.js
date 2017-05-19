/**
 * 1.4 Create Store
 */
import { createStore, applyMiddleware } from 'redux';
import indexOfReducers from './reducers';
import thunk from 'redux-thunk';

export default function initStore(initialState) {
    return createStore(
        indexOfReducers, 
        initialState, 
        applyMiddleware(thunk)
        );
}
