import { string, number, shape, arrayOf } from 'prop-types';

export const AsteroidItemType = shape({
  estimated_diameter: shape({
    kilometers: shape({
      estimated_diameter_max: number.isRequired,
    }),
  }),
  absolute_magnitude_h: number.isRequired,
  close_approach_data: arrayOf(shape({
    miss_distance: shape({
      kilometers: string.isRequired,
    }),
  })),
  name: string.isRequired,
});
