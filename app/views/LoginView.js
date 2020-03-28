import React, { Component } from 'react';

import style from '../App.css';

// Components
import { LoginFormComponent } from '../components';

export default class LoginView extends Component{
    render(){
        return(
            <div className={style.view}>
                <div className={style.logo}>
                    <h1 className={style.logo__text}>SpendlyTime<small className={style.logo__small}>.com</small></h1>
                </div>
                <div className={style.wrapper}>
                    <div className={style.wrapper__text}>
                        <h2 className={style.wrapper__text__title}>
                            <strong>Zaloguj się</strong>
                            <small className={style.wrapper__text__title_small}>lub</small>
                            <strong className={style.wrapper__text__title_strong}>Zarejestruj</strong>
                        </h2>
                        <p className={style.wrapper__text__description}>
                            Aby móc korzystać w pełni z aplikacji musisz się zalogować.
                        </p>
                    </div>
                    <LoginFormComponent />
                </div>
                <footer className={style.footer}>
                    <p className={style.footer__text}>Ⓒ 2020 SpendlyTime</p>
                </footer>
            </div>
        );
    }
}