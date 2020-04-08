import React from 'react';
import PropTypes from 'prop-types';

import { SmallLogo } from '../components';

function Navbar({ userEmail }){
    if(userEmail){
        return(
            <div className="navbar">
                <SmallLogo />
                <div className="navbar__account">
                    <div className="navbar__account__wrapper">
                        <div className="navbar__account__avatar"/>
                        <div className="navbar__account__email">
                            michalgolda@vp.pl
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

Navbar.propTypes = {
    userEmail: PropTypes.string
}

export default Navbar;