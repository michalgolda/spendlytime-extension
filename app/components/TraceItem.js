import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tracesActions, timeEntryActions } from '../actions';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'


function TraceItem(props){
    const { url, duration, id } = props;

    const [isShowActions, setShowActions] = useState(false);
    const [timerInterval, setTimerInterval] = useState(false);
    const [timerDuration, setTimerDuration] = useState(duration);
    const [isRunTimer, setRunTimer] = useState(false);

    function handleDelete(e){
        e.preventDefault();

        props.deleteTrace(id);
    }

    function startTimer(e){
        e.preventDefault();

        setRunTimer(true);

        const date = new Date();
        const data = {
            tid: props.id,
            start: date.toJSON()
        }
        props.startTimeEntry(data);

        const interval = setInterval(() => {
            setTimerDuration(duration => duration + 1);
        }, 1000);

        setTimerInterval(interval);
    }

    function stopTimer(e){
        e.preventDefault();

        setRunTimer(false);

        clearInterval(timerInterval);
        setTimerInterval(null);

        const timeEntryId = props.timeEntry.items[props.id].id;
        const date = new Date();
        const data = {
            tid: props.id,
            stop: date.toJSON(),
            duration: timerDuration
        }
        props.stopTimeEntry(timeEntryId, data);
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
                        <p className="trace__details__timer__value">{timerDuration}</p>
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
                    <div className="trace__actions__action" onClick={(e) => isRunTimer ? stopTimer(e) : startTimer(e)}>
                        <FontAwesomeIcon className="trace__actions__action-play-stop trace__actions__action__icon" icon={isRunTimer ? faStop : faPlay} />
                    </div>
                </div>
            }
        </div>
    );
}

TraceItem.propTypes = {
    url: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
}

const mapState = function(state) {
    const { traces, timeEntry } = state;
    return { traces, timeEntry };
};

const actionCreators = {
    deleteTrace: tracesActions.deleteTrace,
    startTimeEntry: timeEntryActions.startTimeEntry,
    stopTimeEntry: timeEntryActions.stopTimeEntry
}

export default connect(mapState, actionCreators)(TraceItem);