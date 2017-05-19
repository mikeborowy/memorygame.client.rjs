import expect from 'expect';
import {decks} from '../../store/reducers/deckReducer';
import * as actions from '../../store/actions/deckActions';

describe('deckReducer.js', () => {

    describe('- deckReducer Fn', () => {
        it('+ type.ADD_NEW_DECK', () => {
            // arrange prev State
            const initialState = [
                {
                    id: 1,
                    name: 'Deck 1'
                }, {
                    id: 2,
                    name: 'Deck 2'
                }
            ];
            //new element to add
            const deck = {
                id: 3,
                name: 'Deck 3'
            };
            //act
            const action = actions.addNewDeck(deck);
            //new State after add
            const newState = decks(initialState, action);

            //assert
            expect(newState.length).toEqual(3);
            expect(newState[0].name).toEqual('Deck 1');
            expect(newState[1].name).toEqual('Deck 2');
            expect(newState[2].name).toEqual('Deck 3');
        });
    });
});
