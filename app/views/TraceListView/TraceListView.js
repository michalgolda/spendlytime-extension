import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { WithAuthComponent as WithAuth } from '../../components';

import style from './TraceListView.css';

class TraceListView extends Component{
    render(){
        const { data } = this.props;

        if(!data){
            return(
                <div className={style.wrapper}>
                    <div className={style.noData}>
                        <h1 className={style.noData__title}>Uwaga!</h1>
                        <p className={style.noData__description}>
                            Aby rozpocząć analizę spędzonego czasu na danej stronie kliknij w start
                        </p>
                    </div>
                    <Link to="/test" className={style.noData__addTrace}>+</Link>
                </div>
            );
        } else {
            return <h1>Track list</h1>;
        }
    }
}

export default WithAuth(TraceListView);