import React, { Component, PropTypes } from 'react';
import Card from '../card/Card';

class CardsDeck extends Component {
    render() {

        let {
            children, 
            deckId, 
            cards,
            selectedDeck,
            onShowDeck
        } = this.props;

        return (
            <div className="main">
                {cards.map( card => <Card card={card}  key={card.id}/> )}
                {children}
                <div className="app-message"  style={{color:'yellowgreen'}}>
                    <div className="props"  style={{color:'yellowgreen'}}>Deck Id: {deckId}, Deck name: {selectedDeck.name}</div>
                    <h4>CardsDeck (App child)</h4>
                </div>
                <button onClick={onShowDeck}>Add card from Visible Component</button>
            </div>
        );
    }
}

CardsDeck.propTypes = {
    children: PropTypes.object,
    cards: PropTypes.array,
    deckId: PropTypes.string,
    selectedDeck: PropTypes.object,
    onShowDeck: PropTypes.func
};

export default CardsDeck;