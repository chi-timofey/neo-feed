import React from 'react';
import renderer from 'react-test-renderer';
import { AsteroidsContainer } from '../';

jest.mock('../../../components/AsteroidsList', () => 'AsteroidsList');

describe('<AsteroidsContainer />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AsteroidsContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
