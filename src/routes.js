/**
 * because component file :
 * export class ManageCoursePage --> import {ManageCourseContainer}
 * export default ManageCoursePage --> import ManageCourseContainer
 * we need to disale syntax checking by eslint
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import CardsDeck from './components/cardsDeck/Connector';
import Toolbar from './components/toolbar/Connector';
import NewCardModal from './components/cardModal/ConnectorNew';
import UpdateCardModal from './components/cardModal/ConnectorUpdate';
import StudyModal from './components/studyModal/Connector';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/deck/:deckId" component={CardsDeck}>
        <Route path="/deck/:deckId/new" component={NewCardModal}/>
        <Route path="/deck/:deckId/update/:cardId" component={UpdateCardModal}/>
        <Route path="/deck/:deckId/study" component={StudyModal}/>
      </Route>
    </Route>
  </Router>
);
