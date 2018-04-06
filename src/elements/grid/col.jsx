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
            <div className={`col ${this.getFormatedCollumnSizesClasses()} ${this.getFormatedCollumnModifiersClasses()}`}>
                {this.props.children}
            </div>
        );
    }

    getFormatedCollumnSizesClasses() {
        const passedCollumnSizes = this.collumnSizes.filter(size => this.props.hasOwnProperty(size));

        return passedCollumnSizes.reduce((formatedClasses, size) => `${formatedClasses} ${size}${this.props[size]}`, '');
    }

    getFormatedCollumnModifiersClasses() {
        const passedCollumnModifiers = this.collumnModifiers.filter(modifier => this.props.hasOwnProperty(modifier));

        return passedCollumnModifiers.reduce((formatedClasses, modifier) => `${formatedClasses} ${modifier}${this.props[modifier]}`, '');
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
