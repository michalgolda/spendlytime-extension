import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tracesActions } from '../actions';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'


function TraceItem(props){
    const { url, time, id } = props;

    const [isShowActions, setShowActions] = useState(false);
    const [isTimerRun, setTimerRun] = useState(false);

    function handleDelete(e){
        e.preventDefault();

        props.deleteTrace(id);
    }

    return(
        <div
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <div className="trace">
                <div className="trace__url">
                    <p className="trace__url__text">{url}</p>
                </div>
                <div className="trace__details">
                    <div className="trace__details__timer">
                        <p className="trace__details__timer__value">{time}</p>
                    </div>
                </div>
            </div>
            {isShowActions &&
                <div
                    className="trace__actions"
                >
                    <div className="trace__actions__action" onClick={(e) => handleDelete(e)}>
                        <FontAwesomeIcon className="trace__actions__action-delete trace__actions__action__icon" icon={faTrash} />
                    </div>
                    <div className="trace__actions__action" onClick={() => isTimerRun ? setTimerRun(false) : setTimerRun(true)}>
                        <FontAwesomeIcon className="trace__actions__action-play-stop trace__actions__action__icon" icon={isTimerRun ? faStop : faPlay} />
                    </div>
                </div>
            }
        </div>
    );
}

TraceItem.propTypes = {
    url: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

const mapState = function(state) {
    const { traces } = state;
    return { traces };
};

const actionCreators = {
    deleteTrace: tracesActions.deleteTrace
}

export default connect(mapState, actionCreators)(TraceItem);