/*
 * SideBar Container (Controller) - is use to send properties and functions
 * that components should have:
 * 
 * <SideBar
 *      decks={ state.decks }
 *      addingDeck={ state.addingDeck}
 *      onAddDeck = { (deck) => store.dispatch(deckActions.addNewDeck(deck))}
 *      onShowDeck = {() => store.dispatch(deckActions.showAddDeck())}
 *      onHideDeck = {() => store.dispatch(deckActions.hideAddDeck())}
 * />
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/deckActions';
import {SideBar} from './SideBar';

function findElementById(array, id) {
    const element = array.filter(item => item.id == id);
    if (element) 
        return element[0]; //since filter returns an array, have to grab the first.
    return null;
}

const mapStateToProps = (state, ownProps) => {

    let selectedState = findElementById( state.decks, state.clickedDeckId);

    return {
        decks: state.decks, 
        // selectedDeck: state.selectedState,
        selectedDeck: selectedState,
        addingDeck: state.addingDeck,
        clickedDeckId: state.clickedDeckId
    };
};

/**
 * bind actions way of dispatch
 * if action names in deckActions.js match names of components
 * functions you can use just bindActionCreators(deckActions, dispatch)
 * instead of listening all functions and assigning to them actions
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actions, dispatch)
        onAddDeck: (newDeck) => dispatch( actions.addNewDeck(newDeck) ),
        onSelectedDeck: (selectedDeck) => dispatch( actions.selectedDeck(selectedDeck) ),
        onClickedDeck: (clickedDeckId) => dispatch( actions.clickedDeckId(clickedDeckId) ),
        onShowDeck: () => dispatch( actions.showAddDeck() ),
        onHideDeck: () => dispatch( actions.hideAddDeck() )
    };
};

const Connctor = connect(mapStateToProps, mapDispatchToProps)(SideBar);
export default Connctor;