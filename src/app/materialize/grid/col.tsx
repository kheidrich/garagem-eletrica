import React, { Component } from 'react'
import PropTypes from 'prop-types'

type CollumSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12;
type ColProps = {
    s?: CollumSize,
    m?: CollumSize,
    l?: CollumSize,
    xl?: CollumSize,
    offset?: CollumSize,
    pull?: CollumSize,
    push?: CollumSize
}

export class Col extends Component<ColProps> {
    private screenWidthSelectors: string[] = ['s', 'm', 'l', 'xl'];
    private collumnModifiers: string[] = ['offset', 'pull', 'push'];

    public render() {
        return (
            <div className={`col ${this.getFormattedCollumnSizeClasses()} ${this.getFormattedCollumnModifierClasses()}`}>
                {this.props.children}
            </div>
        );
    }

    getFormattedCollumnSizeClasses() {
        const passedScreenWidthSelectors = this.screenWidthSelectors.filter(selector => this.props.hasOwnProperty(selector));

        return passedScreenWidthSelectors.reduce(
            (formattedClasses, selector) => `${formattedClasses} ${selector}${this.props[selector]}`,
            '');
    }

    getFormattedCollumnModifierClasses() {
        const passedCollumnModifiers = this.collumnModifiers.filter(modifier => this.props.hasOwnProperty(modifier));

        return passedCollumnModifiers.reduce(
            (formattedClasses, modifier) => `${formattedClasses} ${modifier}${this.props[modifier]}`,
            '');
    }

    static propTypes = {
        s: PropTypes.number,
        m: PropTypes.number,
        l: PropTypes.number,
        xl: PropTypes.number,
        offset: PropTypes.number,
        pull: PropTypes.number,
        push: PropTypes.number
    }
}
