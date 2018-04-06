import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Col extends Component {

    constructor(props) {
        super(props)

        this.collumnSizes = ['s', 'm', 'l', 'xl'];
        this.collumnModifiers = ['offset', 'pull', 'push'];
    }

    render() {
        return (
            <div className={`col ${this.getFormattedCollumnSizesClasses()} ${this.getFormattedCollumnModifiersClasses()}`}>
                {this.props.children}
            </div>
        );
    }

    getFormattedCollumnSizesClasses() {
        const passedCollumnSizes = this.collumnSizes.filter(size => this.props.hasOwnProperty(size));

        return passedCollumnSizes.reduce((formattedClasses, size) => `${formattedClasses} ${size}${this.props[size]}`, '');
    }

    getFormattedCollumnModifiersClasses() {
        const passedCollumnModifiers = this.collumnModifiers.filter(modifier => this.props.hasOwnProperty(modifier));

        return passedCollumnModifiers.reduce((formattedClasses, modifier) => `${formattedClasses} ${modifier}${this.props[modifier]}`, '');
    }

    static propTypes = {
        s: PropTypes.string,
        m: PropTypes.string,
        l: PropTypes.string,
        xl: PropTypes.string,
        offset: PropTypes.string,
        pull: PropTypes.string,
        push: PropTypes.string
    }
}
