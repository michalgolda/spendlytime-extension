import React, { Component } from 'react';

import style from './AddTrace.css';
import { WithAuth } from '../../components';

import { convertStringUrl } from '../../utils';

import { connect } from 'react-redux';

@connect(
    state => ({
        browserData: state.browserData
    })
)
class AddTrace extends Component{
    render(){

        const currentUrl = convertStringUrl(this.props.browserData.currentTab.url);

        return(
            <div className={style.wrapper}>
                <div className={style.texts}>
                    <h1 className={style.texts__title}>Zaczynajmy!</h1>
                    <p className={style.texts__description}>
                    Aby zacząc analizwać spędzony czas na danej stronie kliknij w start
                    </p>
                </div>
                <form className={style.form}>
                    <div className={style.form__group}>
                        <label className={style.form__label}>Adres URL strony</label>
                        <input defaultValue={currentUrl.origin} type="text" className={`${style.form__input} ${style.form__input_url}`}/>
                    </div>
                    <button className={style.form__submit}>Start</button>
                </form>
            </div>
        );
    }
}

export default WithAuth(AddTrace);