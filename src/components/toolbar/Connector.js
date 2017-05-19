import {connect} from 'react-redux';
//actions
import * as deckActions from '../../store/actions/deckActions';
import * as cardActions from '../../store/actions/cardActions';
//component
import {Toolbar} from './Toolbar';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onShowDeck: () => dispatch(deckActions.showAddDeck()),
    onHideDeck: () => dispatch(deckActions.hideAddDeck()),
    onFilter: (query) => dispatch(cardActions.cardFilter(query))
});

const Connector = connect(null, mapDispatchToProps)(Toolbar);
export default Connector;