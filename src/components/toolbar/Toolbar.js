import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

/**
 * Gets Deck id by App Component:
 * <Toolbar deckId={this.props.deckId}/> 
 */

export class Toolbar extends Component{

    constructor(props)
    {
        super(props);
        this.filterFn = this.filterFn.bind(this);
    }

    filterFn(evt){
        this.props.onFilter(evt.target.value);
    }

    render(){

        let deckTools = this.props.deckId ? (
            <div>
                <Link className="btn" to={`/deck/${this.props.deckId}/new`} >+ New Card</Link>
                <Link className="btn" to={`/deck/${this.props.deckId}/study`} >Study Card</Link>
                <input  className="search" 
                        type="search" 
                        onChange = {this.filterFn} 
                        placeholder="Search Deck..."/>
            </div>
        ) : null;

        return(
             <div className="toolbar">
                <div>
                    <button onClick={this.props.onShowDeck}>+ Add New Deck</button>
                </div>
                {deckTools}
                <div className="props" style={{color:'darkviolet'}}>Deck Id: { this.props.deckId }</div>
            </div> 
        );
    }
}

Toolbar.propTypes= {
    deckId: PropTypes.string,
    onShowDeck: PropTypes.func,
    onFilter: PropTypes.func
};

// export default Toolbar;