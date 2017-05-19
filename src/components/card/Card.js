import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Card extends Component {
    render() {

        let {card} = this.props;
        return (
            <div className="card">
                <div>
                    <p>{card.front}</p>
                    <Link className="btn" to={`/deck/${card.deckId}/update/${card.id}`}>Edit</Link>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object
};

export default Card;