import {connect} from 'react-redux';
import StudyModal from './StudyModal';
import { updateCard, setShowBack } from '../../store/actions/cardActions';

const MS_IN_DAY = 86400000;
const WHEN_STUDIED = (card) => (new Date - card.lastStudiedOn / MS_IN_DAY >= card.score); 

const mapStateToProps =( state, router) =>{

    let deckId = router.params.deckId;
    let card = state.cards.filter( card => card.deckId === deckId && (
        !card.lastStudiedOn || WHEN_STUDIED
    ) )[0];
    let showBack = state.showBack;


    return({
        card,
        showBack, 
        deckId
    });
};
const mapDispatchToProps = dispatch =>({
    onStudied: (cardId, score) => {
        let now = new Date();
        //time set to midnight of today
        now.setHours(0,0,0,0);
        dispatch(updateCard({id: cardId, score, lastStudiedOn: +now}));
        dispatch(setShowBack());
    },
    onFlip: () => dispatch(setShowBack(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);