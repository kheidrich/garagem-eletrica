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
        return this.collumnSizes.reduce((formatedClasses, size) =>
            (this.props[size])
                ? `${formatedClasses} ${size}${this.props[size]}`
                : formatedClasses,
            '');
    }

    getFormatedCollumnModifiersClasses() {
        return this.collumnModifiers.reduce((formatedClasses, modifier) =>
            (this.props[modifier])
                ? `${formatedClasses} ${modifier}-${this.props[modifier]}`
                : formatedClasses,
            '');
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
