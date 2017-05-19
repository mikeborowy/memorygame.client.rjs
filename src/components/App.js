/**
 * 2.1 Create Wrapper Component -This component handles the
 * App template used on every page.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/deckActions';

import Toolbar from './toolbar/Connector';
import Sidebar from './sidebar/Connector';
import CardsDeck from './cardsDeck/Connector';

class App extends Component {
  render() {

    let {
      children, 
      deckId
    } = this.props;

    return (
      <div className="app">
        <div className="app-message" style={{color:'red'}}>
          <div className="props">Deck Id: {deckId}</div>
          <h4>Parent: App Component</h4>
        </div>
        <Toolbar deckId={deckId} /> 
        <Sidebar />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object, 
  deckId: PropTypes.string
  // isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, router) => {
  return {deckId: router.params.deckId};
};

const mapDispatchToProps = () => {};

const Connector = connect(mapStateToProps, null)(App);
export default Connector;
