import PropTypes from 'prop-types';
import Colors from './Colors';
import ColorIntensities from './ColorIntensities';

export default PropTypes.shape({
    color: PropTypes.oneOf(Colors.textColors),
    intensity: PropTypes.oneOf(ColorIntensities)
});
