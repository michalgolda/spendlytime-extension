import React, { Component } from 'react';

import style from './TraceItem.css';

export default class TraceItem extends Component{
    render(){

        const { url, time} = this.props;

        return(
            <div className={style.trace}>
                <div className={style.trace__url}>
                    <p className={style.trace__url__text}>{url}</p>
                </div>
                <div className={style.trace__details}>
                    <div className={style.trace__details__timer}>
                        <p className={style.trace__details__timer__value}>{time}</p>
                    </div>
                    <div className={style.trace__details__action}>
                        <p className={style.trace__details__action__text}>•••</p>
                    </div>
                </div>
            </div>
        );
    }
}