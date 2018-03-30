/* eslint-disable camelcase */
import React from 'react';
import { string, arrayOf } from 'prop-types';
import { AsteroidItemType } from './types';
import AsteroidItem from './AsteroidItem';
import AsteroidItemHead from './AsteroidItemHead';

const AsteroidsList = ({ items, highlightedListId }) => (
  <table className="table">
    <AsteroidItemHead />
    <tbody>
      {
        items.map(item => (
          <AsteroidItem
            highlighted={highlightedListId.includes(item.neo_reference_id)}
            key={item.neo_reference_id}
            item={item}
          />))
      }
    </tbody>
  </table>
);

AsteroidsList.propTypes = {
  items: arrayOf(AsteroidItemType).isRequired,
  highlightedListId: arrayOf(string).isRequired,
};

export default AsteroidsList;
