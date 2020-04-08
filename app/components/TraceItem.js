import React from 'react';
import PropTypes from 'prop-types';

function TraceItem({ url, time }){
    return(
        <div className="trace">
            <div className="trace__url">
                <p className="trace__url__text">{url}</p>
            </div>
            <div className="trace__details">
                <div className="trace__details__timer">
                    <p className="trace__details__timer__value">{time}</p>
                </div>
                <div className="trace__details__action">
                    <p className="trace__details__action__text">•••</p>
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