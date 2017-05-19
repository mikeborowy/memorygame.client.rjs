/*eslint-disable no-alert, no-console */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

class CardModal extends Component {

    constructor(props, context){
        super(props, context);

        // this.state = {
        //     card: Object.assign({}, this.props.card)
        // };

        this.saveFn = this.saveFn.bind(this);
        this.deleteFn = this.deleteFn.bind(this);
    }
    
    componentDidUpdate(){
        ReactDOM.findDOMNode(this.refs.front_IN).focus();
    }
    
    saveFn(){
        let front = ReactDOM.findDOMNode(this.refs.front_IN);
        let back = ReactDOM.findDOMNode(this.refs.back_IN);

        //find front, back and change them
        // let card = {
        //     id: this.props.card.id,
        //     deckId: this.props.card.deckId,
        //     score: this.props.card.score,
        //     front: front.value,
        //     back: back.value
        // };
         
        // let card = Object.assign({}, this.state.card, { front: front.value,  back: back.value});
        let card = Object.assign({}, this.props.card, { front: front.value,  back: back.value});
        this.props.onSave(card);

        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }

    deleteFn(evt){
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }

    render() {
        // let card= this.props.card;
        // let card= this.props.onDelete;
        let {card, onDelete} = this.props;

        return (
            <div className="modal">
                <div className="info">CardModal (CardsDeck child)</div>
                <h1>{ onDelete ? 'Edit' : 'New'}</h1>
                <label htmlFor="">Card Front</label>
                <textarea ref="front_IN" defaultValue={card.front}/>
                <label htmlFor="">Card Back</label>
                <textarea ref="back_IN" defaultValue={card.back}/>
                <p>
                    <button onClick={this.saveFn}>Save Card</button>
                    <Link className="btn" to={`/deck/${card.deckId}`}>Cancel</Link>
                    {onDelete ?
                        <button onClick={this.deleteFn}>Delete Card</button> 
                        :
                        null
                    } 
                </p>
            </div>
        );
    }
}

CardModal.propTypes = {
  card: PropTypes.object,
  onSave: PropTypes.func,
  onDelete: PropTypes.func
  // isLoading: PropTypes.bool.isRequired
};
export default CardModal;