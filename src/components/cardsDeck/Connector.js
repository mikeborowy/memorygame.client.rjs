import {connect} from 'react-redux';
import * as actions from '../../store/actions/deckActions';
import Card from '../card/Connector';
import CardsDeck from './CardsDeck';
import fuzzysearch from 'fuzzysearch';

/**
 * Gets Deck id from url router thank to Router
 *  {this.props.children}
 */

const matches = (filter, card) => (
    fuzzysearch(filter, card.front) || fuzzysearch(filter, card.back)
);

const mapStateToProps = (state, {params:{deckId}}) => {

    let cardFilter = state.cardFilter;

    return(
        {
            cards: state.cards.filter( card => card.deckId === deckId && matches( cardFilter, card)),
            deckId,
            selectedDeck: state.selectedDeck
        }
    );
};

const mapDispatchToProps = (dispatch) => ({
    onShowDeck: () => dispatch(actions.showAddDeck()),
    onHideDeck: () => dispatch(actions.hideAddDeck())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsDeck);