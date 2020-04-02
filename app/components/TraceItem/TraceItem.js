import React from 'react';
import PropTypes from 'prop-types';

import style from './TraceItem.css';

function TraceItem({ url, time }){
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

TraceItem.propTypes = {
    url: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default TraceItem;