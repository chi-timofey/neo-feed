/* eslint-disable camelcase */
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { bool } from 'prop-types';
import { AsteroidItemType } from './types';

class AsteroidItem extends PureComponent {
  static propTypes = {
    item: AsteroidItemType.isRequired,
    highlighted: bool.isRequired,
  }

  render() {
    const { item, highlighted } = this.props;
    const {
      estimated_diameter, absolute_magnitude_h, close_approach_data, name,
    } = item;
    return (
      <tr className={classnames({ 'table-danger': highlighted })}>
        <th scope="row">{name}</th>
        <td>{estimated_diameter.kilometers.estimated_diameter_max}</td>
        <td>{absolute_magnitude_h}</td>
        <td>{close_approach_data[0].miss_distance.kilometers}</td>
      </tr>
    );
  }
}

export default AsteroidItem;
