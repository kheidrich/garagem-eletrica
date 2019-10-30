import PropTypes from 'prop-types';
import { BackgroundColor } from './BackgroundColor';
import { ColorIntensity } from './ColorIntensity';

export const BackgroundColorShape = PropTypes.shape({
    color: PropTypes.oneOf(Object.values(BackgroundColor)),
    intensity: PropTypes.oneOf(Object.values(ColorIntensity))
});
