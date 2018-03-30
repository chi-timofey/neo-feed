import React from 'react';
import renderer from 'react-test-renderer';
import data from 'mock/data.json';
import AsteroidsList from '.';

describe('<AsteroidsList />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AsteroidsList items={data.slice(0, 6)} highlightedListId={['123', '234']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
