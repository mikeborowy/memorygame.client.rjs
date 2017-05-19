import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/cardActions';
import CardModal from './CardModal';

const mapStateToProps = (state, router) => {

    let deckId = router.params.deckId;
    return {
        card: {
            deckId: deckId
        }
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
        onSave: (card) => dispatch(actions.addNewCard(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);