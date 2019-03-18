import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Col extends Component {

    constructor(props) {
        super(props)

        this.screenWidthSelectors = ['s', 'm', 'l', 'xl'];
        this.collumnModifiers = ['offset', 'pull', 'push'];
    }

    render() {
        return (
            <div className={`col ${this.getFormattedCollumnSizeClasses()} ${this.getFormattedCollumnModifierClasses()}`}>
                {this.props.children}
            </div>
        );
    }

    getFormattedCollumnSizeClasses() {
        const passedScreenWidthSelectors = this.screenWidthSelectors.filter(selector => this.props.hasOwnProperty(selector));

        return passedScreenWidthSelectors.reduce((formattedClasses, selector) => `${formattedClasses} ${selector}${this.props[selector]}`, '');
    }

    getFormattedCollumnModifierClasses() {
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
