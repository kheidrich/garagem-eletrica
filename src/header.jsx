import React from 'react';
import raceFlagIcon from './race-flag-icon.png';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper black">
                    <div className="center">
                        <img src={raceFlagIcon} width="100" heigh="100" class="race-flag-icon"/>
                        <a href="#" className="brand-logo center belair-font"><b>Garagem Eletrica</b></a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;