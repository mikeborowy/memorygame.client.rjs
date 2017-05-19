
/**
 *  1.1 Deck Actions (Events)
 */
import * as types from '../../constants/actionTypes';
/*
when use the same actions names as component actions/functions 
you can bind them in Container (Controller) with 
bindActionCreators(actions, dispatch)
*/
export const addNewDeck = (newDeck) => ({type: types.ADD_NEW_DECK_SUCCESS, data: newDeck});
export const selectedDeck = (selectedDeck) => ({type: types.SELECTED_DECK, data: selectedDeck});

export const showAddDeck = () => ({type: types.SHOW_ADD_DECK});
export const hideAddDeck = () => ({type: types.HIDE_ADD_DECK});

export const clickedDeckId = (clickedDeckId) => ({type: types.SET_DECK_ID, clickedDeckId: clickedDeckId});
export const returnDeckId = () => ({type: types.GET_DECK_ID});
 

/*
<SideBar
    decks={ state.decks }
    addingDeck={ state.addingDeck}
    onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
    onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
    onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
/>*/