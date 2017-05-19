// This component handles the App template used on every page. React ecosystem
import React from 'react';
import ReactDOM from 'react-dom'; //generates Dom
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; //allows to access store thru other components
import routes from './routes';
//styles
import './styles/styles.css';

//constants
import * as types from './constants/actionTypes';
import * as ajaxActions from './store/actions/ajaxCallActions';
//store
import initStore from './store';
import reducers from './store/reducers';
import * as localStore from './store/localStore';

/** GET INITIAL DATA */
// const initialState = localStore.get();

/** INIT STORE */
const store = initStore();
// const store = createStore(combineReducers( reducers, localStore.get()));



function App() {
  ReactDOM.render(
    <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('react-container'));
}

function save() {

  let state = store.getState();

  fetch('/api/data', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({decks: state.decks, cards: state.cards})

  });
}


function init() {
     App();   
     store.subscribe(App);   
     store.dispatch(save);
     store.dispatch(ajaxActions.fetchData()); 
} 

init();
