import PropTypes from 'prop-types';
import TextColor from './TextColor';
import ColorIntensity from './ColorIntensity';

export default PropTypes.shape({
    color: PropTypes.oneOf(Object.values(TextColor)),
    intensity: PropTypes.oneOf(Object.values(ColorIntensity))
});
