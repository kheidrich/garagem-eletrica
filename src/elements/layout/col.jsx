import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Col extends Component {

    constructor(props) {
        super(props)

        this.screenWidthSelectors = ['s', 'm', 'l', 'xl'];
        this.modifiers = ['offset', 'pull', 'push'];
    }

    render() {
        return (
            <div className={`col ${this.getFormattedSizesClasses()} ${this.getFormattedModifiersClasses()}`}>
                {this.props.children}
            </div>
        );
    }

    getFormattedSizesClasses() {
        const passedScreenWidthSelectors = this.screenWidthSelectors.filter(screenWidthSelector => this.props.hasOwnProperty(screenWidthSelector));

        return passedScreenWidthSelectors.reduce((formattedClasses, screenWidthSelector) => `${formattedClasses} ${screenWidthSelector}${this.props[screenWidthSelector]}`, '');
    }

    getFormattedModifiersClasses() {
        const passedCollumnModifiers = this.modifiers.filter(modifier => this.props.hasOwnProperty(modifier));

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
