import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextColorShape from '../color/TextColorShape';

class CardContent extends Component {
    render() {
        return (
            <div className={`card-content ${this.props.textColor.color} ${this.props.textColor.intensity}`}>
                {this.props.children}
            </div>
        );
    }

    static propTypes = {
        textColor: TextColorShape
    }

    static defaultProps = {
        textColor: {
            color: '',
            intensity: ''
        }
    }
}

export default CardContent;