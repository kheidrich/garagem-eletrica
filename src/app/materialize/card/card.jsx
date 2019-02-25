import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`card ${this.props.color} ${this.props.colorIntensity}`}>
                {this.props.children}
            </div>
        );
    }

    static defaultProps = {
        color: '',
        colorIntensity: ''
    }

    static propTypes = {
        color: PropTypes.string,
        colorIntensity: PropTypes.string
    }
}

export default Card;