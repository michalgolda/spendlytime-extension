import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { WithAuth, TraceItem } from '../../components';

import style from './TraceList.css';

import { convertStringUrl } from '../../utils';


@connect(
    state => ({
        browserData: state.browserData
    })
)
class TraceList extends Component{
    render(){

        const { currentTab } = this.props.browserData;
        const currentUrl = convertStringUrl(currentTab.url);
        const fakeData = [{'url': 'https://google.com', time: '31:31'}, {'url': 'https://facebook.com', time: '12:31'}]

        if(false){
            return(
                <div className={style.wrapper}>
                    <div className={style.noData}>
                        <h1 className={style.noData__title}>Uwaga!</h1>
                        <p className={style.noData__description}>
                            Aby rozpocząć analizę spędzonego czasu na danej stronie kliknij w start
                        </p>
                    </div>
                    <Link to="/trace/add" className={style.noData__addTrace}>+</Link>
                </div>
            );
        } else {
            return(
                <div className={style.container}>
                    <form className={style.form}>
                        <div className={style.form__container}>
                            <input className={style.form__input} type="text" defaultValue={currentUrl.origin}/>
                        </div>
                        <button className={style.form__submit}>+</button>
                    </form>
                    <div className={style.list}>
                        {fakeData.map((trace) =>
                            <TraceItem key={trace.url} url={trace.url} time={trace.time} />
                        )}
                    </div>
                </div>
            );
        }
    }
}

export default WithAuth(TraceList);