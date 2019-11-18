import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'
import { BackgroundColor, ColorIntensity, MaterializeColor } from '../color'

type SaveButtonProps = {
    onClick?: () => void;
}

export class SaveButton extends Component {

    public render() {
        return (
            <Button
                label="Salvar"
                color={new MaterializeColor(
                    BackgroundColor.Green,
                    ColorIntensity.Lighten1
                )}
                submit
            />
        )
    }

    static propTypes = {
        onClick: PropTypes.func
    }
}