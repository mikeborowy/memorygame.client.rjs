import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class StudyModal extends Component {

    constructor(props){
        super(props);

        // this.onClick = this.onClick.bind(this);
    }

    render() {

        let {deckId, card, showBack, onFlip, onStudied} = this.props;
        
        let body = (<div className="no-cards">
            <p>You have no cards to study in this deck. Good Job!</p>
        </div>);
    
        if(card){
            body = (
                <div className="study-card">
                    <div className={showBack ? "front hide" :  "front"}>
                        <div>
                            <p>{card.front}</p>
                        </div>
                        <button onClick={onFlip}>Flip Card</button>
                    </div>

                    <div className={showBack ? "back" :  "back hide"}>
                      <div>
                            <p>{card.back}</p>
                        </div>
                        <p>How did you do?</p>
                        <button onClick={evt => onStudied(card.id, Math.max(card.score -1, 1))}>Poorly</button>
                        <button onClick={evt => onStudied(card.id, card.score)}>Okay</button>
                        <button onClick={evt => onStudied(card.id, Math.min(card.score + 1, 3))}>Good</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="modal study-modal">
                <Link className="btn close" to={`/deck/${deckId}`}>x</Link>
                {body}
            </div>
        );
    }
}

StudyModal.propTypes = {
    deckId: PropTypes.string,
    card: PropTypes.object,
    showBack: PropTypes.bool,
    onFlip: PropTypes.func,
    onStudied: PropTypes.func
};

export default StudyModal;