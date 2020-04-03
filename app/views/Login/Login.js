import React, { Component } from 'react';

import style from './Login.css';
import { config } from '../../config';


export default class Login extends Component{

    constructor(props){
        super(props);

        this.handleCreateLoginTab = this.handleCreateLoginTab.bind(this);
    }

    handleCreateLoginTab(e){
        e.preventDefault();

        chrome.tabs.create({ url: config.login_url }, () => {});
    }

    render(){
        return(
            <div>
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
                </div>
                <div className={style.goTo}>
                    <button onClick={this.handleCreateLoginTab} className={style.goTo__btn}>Let's start</button>
                </div>
            </div>
        );
    }
}