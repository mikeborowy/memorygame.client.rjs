/*
Objects held in store
*/
export default {
    ajaxCallsInProgress: 0, //this will be global variable for ajaxCallReducer,
    cards : [],
    card: {
        id: '',
        deckId: '',
        score: '',
        front:'',
        back: ''
    },
    decks: [],
    selectedDeck: {
        id: '',
        name: ''
    },
    showAddingDeck: false,
    clickedDeckId: 0
};