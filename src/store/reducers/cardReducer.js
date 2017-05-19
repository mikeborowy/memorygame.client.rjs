import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export function showBack(prevState, action){
       switch( action.type ){
        case types.SET_SHOW_BACK:
            return action.data || false;
        default:
            return prevState || false;
    }
}

export function cardFilter(prevState, action){

    switch( action.type ){
        case types.FILTER_CARDS:
            return action.data;
        default:
            return prevState || '';
    }
}

export function cards(prevState = initialState.cards, action) {

    switch (action.type) {
        /** action.data:{deckId='', front='', back=''} */
        case types.RECEIVE_DATA:
            return action.data.cards || prevState;

        case types.ADD_NEW_CARD_SUCCESS:

            /*eslint-disable */
            var newCard = {
                id: + new Date,
                score: 1,
                deckId: action.data.deckId,
                front: action.data.front,
                back: action.data.back
            }
            /*eslint-enable */
            //return prevState.concat([newCard]) 
            return [
                ...prevState,
                Object.assign({}, newCard)
            ];

        /** action.data:{id='', score='', deckId='', front='', back=''} */
        case types.UPDATE_CARD_SUCCESS:

            // return prevState.map(card => (card.id !== action.data.id) ? card : Object.assign({}, card, action.data));
            return [
                ...prevState.filter(card => card.id !== action.data.id), 
                Object.assign({}, prevState, action.data) //to returned array we add this which we update, as a matter of fact we just add new one due to immutability
            ];

        /** action.data:{id=''} */
        case types.DELETE_CARD_SUCCESS:
            return prevState.filter( card => card.id !== action.data); //return all cards except one we want to remove


        default:
            return prevState || [];
    }
}