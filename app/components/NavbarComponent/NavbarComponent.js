import React, { Component } from 'react';

import style from './NavbarComponent.css';

export default class NavbarComponent extends Component{
    render(){
        return(
            <div className={style.navbar}>
                <div className={style.navbar__logo}>
                    <h1 className={style.navbar__logo__text}>
                        SpendlyTime<small className={style.navbar__logo__text_small}>.com</small>
                    </h1>
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
    }
}