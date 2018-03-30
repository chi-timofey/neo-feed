import React from 'react';
import { connect } from 'react-redux';
import AsteroidsList from 'components/AsteroidsList';
import { getListToShow, getHighlightedListId } from './selectors';

export const AsteroidsContainer = props => (
  <div className="container" >
    <AsteroidsList {...props} />
  </div>
);

export function select(state, ownProps) {
  const items = getListToShow(state, ownProps);
  const highlightedListId = getHighlightedListId(state, ownProps);

  return {
    items,
    highlightedListId,
  };
}

export default connect(select)(AsteroidsContainer);
