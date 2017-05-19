/**
 * 1.2 Create Reducers
 */
import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export function selectedDeck(prevState = initialState.selectedDeck, action) {
    switch (action.type) {

        case types.SELECTED_DECK:
           /*eslint-disable*/
           var selectedDeck = {
               id: action.data.id,
               name: action.data.name
           }
           /*eslint-enable*/
            // return action.data;
            
            return selectedDeck;

        default:
            return prevState || {};
    }
}

export function decks(prevState = initialState.decks, action) {

    switch (action.type) {

        case types.RECEIVE_DATA:
            return action.data.decks || prevState;

        case types.ADD_NEW_DECK_SUCCESS:

           /*eslint-disable*/
            var newDeck = {
                id: + new Date,
                name: action.data.name
            };
            /*eslint-enable*/

            return [
                ...prevState,
                Object.assign({}, newDeck)
            ];

        default:
            return prevState || [];
    }
}

export function clickedDeckId(prevState = initialState.clickedDeckId, action) {
    switch (action.type) {
        /**{type: types.SHOW_ADD_DECK}*/
        case types.SET_DECK_ID:
            return parseInt(action.clickedDeckId);
        default:
            return parseInt(prevState) || 0;
    }
}

export function addingDeck(prevState = initialState.showAddingDeck, action) {

    switch (action.type) {
        /**{type: types.SHOW_ADD_DECK}*/
        case types.SHOW_ADD_DECK:
            return true;
        /**{type: types.HIDE_ADD_DECK}*/
        case types.HIDE_ADD_DECK:
            return false;

        default:
            return prevState || false;
    }
}
