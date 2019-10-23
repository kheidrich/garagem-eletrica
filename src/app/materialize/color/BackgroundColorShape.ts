import PropTypes from 'prop-types';
import Colors from './Colors';
import ColorIntensities from './ColorIntensities'

export default PropTypes.shape({
    color: PropTypes.oneOf(Colors.backgroundColors),
    intensity: PropTypes.oneOf(ColorIntensities)
});
