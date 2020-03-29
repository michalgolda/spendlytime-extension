import React, { Component } from 'react';

import globalStyle from '../../App.css';
import style from './MainView.css';

import { NavbarComponent, WithAuthComponent as WithAuth } from '../../components';


class MainView extends Component{
    render(){
        return(
            <div className={globalStyle.view}>
                <NavbarComponent />

                <div className={style.wrapper}>
                    <div className={style.noData}>
                        <h1 className={style.noData__title}>Uwaga!</h1>
                        <p className={style.noData__description}>
                            Aby rozpocząć analizę spędzonego czasu na danej stronie kliknij w start
                        </p>
                    </div>
                    <button className={style.addTrack}>+</button>
                </div>
                <footer className={style.footer}>
                    <p className={style.footer__text}>Ⓒ 2020 SpendlyTime</p>
                </footer>
            </div>
        );
    }
}

export default WithAuth(MainView);