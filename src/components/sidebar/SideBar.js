
/**
 * 2.2 Create Sidebar Component
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

/**
 * Gets Deck id thanks to Store
 * <Toolbar deckId={this.props.deckId}/> 
 */

export class SideBar extends Component {

    constructor(props, context){
        super(props, context);

        this.state ={
            showDeck: false
        }

        this.addNewDeckBtn_Click = this.addNewDeckBtn_Click.bind(this);
        this.createNewDeck = this.createNewDeck.bind(this);
        this.getId = this.getId.bind(this);
    }

    componentDidUpdate(){
        let el = ReactDOM.findDOMNode(this.refs.addNewDeck_IN);
        if(el) el.focus();
    }

    getId(evt){
        let deckId = evt.currentTarget.getAttribute('data-id');
        let deckName = evt.currentTarget.innerText;

        let selectedDeck;
        
        if(deckId != 0)
         selectedDeck = {
            id: deckId,
            name:deckName
        };
        else{
            selectedDeck = {
            id: '',
            name:''
        };
        }

        this.props.onSelectedDeck(selectedDeck);
        this.props.onClickedDeck(deckId);
    }

    createNewDeck(evt){
        
        if(evt.which !== 13) 
            return;
        let deckName = ReactDOM.findDOMNode(this.refs.addNewDeck_IN).value;
        this.props.onAddDeck( {name: deckName} );
        this.props.onHideDeck();

        //for local state
        this.setState({showDeck: false});
    }

    addNewDeckBtn_Click(evt){

        this.setState({showDeck: true});
    }

    //React component methods
   
    render() {

        let props = this.props;

        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button onClick={this.addNewDeckBtn_Click}>New Deck (Local)</button>
                <button onClick={props.onShowDeck}>New Deck (Global)</button>
                <ul>
                    {props.decks.map( (deck, i) => 
                        <li key={i}>
                        <Link to={`/deck/${deck.id}`} 
                              data-id={deck.id} 
                              onClick={this.getId}>{deck.name}
                        </Link>
                        </li> )}
                </ul>
                { (this.state.showDeck || props.addingDeck) && <input ref="addNewDeck_IN" onKeyPress={this.createNewDeck}/>}
                {
                  props.selectedDeck &&   
                  <div >
                    <div className="props" style={{color:'blue'}}>Id: {props.selectedDeck.id}</div>
                    <div className="props" style={{color:'blue'}}>Name: {props.selectedDeck.name}</div>
                  </div>
                }
              
            </div>
        );
    }
}

SideBar.defaultProps = {
    decks: [],
    addingDeck: false,
    onAddDeck: () => {},
    onShowDeck: () => {},
    onHideDeck: () => {},
    onSelectedDeck: () => {},
    onClickedDeck: () => {}
};

SideBar.propTypes = {
    decks: PropTypes.array.isRequired,
    selectedDeck: PropTypes.object,
    addingDeck: PropTypes.bool.isRequired,
    onAddDeck: PropTypes.func.isRequired,
    onShowDeck: PropTypes.func.isRequired,
    onHideDeck: PropTypes.func.isRequired,
    onSelectedDeck: PropTypes.func.isRequired,
    onClickedDeck: PropTypes.func.isRequired
};

// export default SideBar;