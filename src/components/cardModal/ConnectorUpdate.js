import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/cardActions';
import CardModal from './CardModal';

const mapStateToProps = (state, router) => {

    let cardId = router.params.cardId;
    let card = state.cards.filter(card => card.id === parseInt(cardId, 10))[0];

    return {card: card};

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
        onSave: (card) => dispatch(actions.updateCard(card)),
        onDelete: (cardId) => dispatch(actions.deleteCard(cardId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);