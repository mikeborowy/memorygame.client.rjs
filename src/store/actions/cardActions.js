/**
 *  1.1 Deck Actions (Events)
 */
import * as types from '../../constants/actionTypes';
/*
when use the same actions names as component actions/functions 
you can bind them in Container (Controller) with 
bindActionCreators(actions, dispatch)
*/
export const addNewCard = (card) => ({type: types.ADD_NEW_CARD_SUCCESS, data: card});
export const updateCard = (card) => ({type: types.UPDATE_CARD_SUCCESS, data: card});
export const deleteCard = (cardId) => ({type: types.DELETE_CARD_SUCCESS, data: cardId});

export const cardFilter = (query) => ({type: types.FILTER_CARDS, data: query});
export const setShowBack = (bool) => ({type: types.SET_SHOW_BACK, data: bool});
