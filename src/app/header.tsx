import React from 'react';
import raceFlagIcon from '../assets/images/race-flag-icon.png';

export default class Header extends React.Component {
    public render() {
        return (
            <nav>
                <div className="nav-wrapper black">
                    <div className="center">
                        <img src={raceFlagIcon} width="100" height="100" className="race-flag-icon"/>
                        <a href="#" className="brand-logo center belair-font"><b>Garagem Eletrica</b></a>
                    </div>
                </div>
            </nav>
        )
    }
}
