import React, { Component } from 'react';
import { config } from '../config';
import { Logo } from '../components';


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
            <>
                <Logo />
                <div className="login-wrapper">
                    <div className="login__texts">
                        <h2 className="login__texts__title">
                            <strong>Zaloguj się</strong>
                            <small className="login__texts__title__small">lub</small>
                            <strong className="green">Zarejestruj</strong>
                        </h2>
                        <p className="login__texts__description">
                            Aby móc korzystać w pełni z aplikacji musisz się zalogować.
                        </p>
                    </div>
                </div>
                <div className="login__start">
                    <button onClick={this.handleCreateLoginTab} className="login__start__btn">Let's start</button>
                </div>
            </>
        );
    }
}