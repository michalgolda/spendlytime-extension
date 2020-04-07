import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Navbar.css';

function Navbar({ userEmail }){
    if(userEmail){
        return(
            <div className={style.navbar}>
                <div className={style.navbar__logo}>
                    <Link className={style.navbar__link} to="/popup.html">
                        <h1 className={style.navbar__logo__text}>
                            SpendlyTime<small className={style.navbar__logo__text_small}>.com</small>
                        </h1>
                    </Link>
                </div>
                <div className={style.navbar__account}>
                    <div className={style.navbar__account__wrapper}>
                        <div className={style.navbar__account_avatar}/>
                        <div className={style.navbar__account__email}>
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