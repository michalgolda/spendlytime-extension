import React, { Component } from 'react';
import { history } from '../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { convertStringUrl } from '../utils';
import { TraceItem, LoadingSpin } from '../components';
import { tracesActions } from '../actions';


@connect(
    state => ({
        browserData: state.browserData,
        traces: state.traces
    }),
    dispatch => ({
        actions: bindActionCreators(tracesActions, dispatch)
    })
)
export default class TraceList extends Component{

    constructor(props){
        super(props);

        this.state = {
            'input_values': {
                'url': {
                    value: convertStringUrl(this.props.browserData.currentTab.url).origin
                }
            },
        }

        this.handleAddTrace = this.handleAddTrace.bind(this);
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    }

    componentDidMount(){
        this.props.actions.fetchTraces();
    }

    handleChangeInputValue(e){
        const inputName = e.target.name;
        const inputValue = e.target.value;

        this.setState({ input_values: { [inputName]: { value: inputValue } } });

    }

    handleAddTrace(e){
        e.preventDefault();

        const data = {
            'trace_url': this.state.input_values.url.value,
            'trace_time': '0:0'
        }

        this.props.actions.addTrace(data);
    }

    render(){
        if(this.props.traces.loading){
            return <LoadingSpin />;
        } else {
            if(this.props.traces.data.length === 0){
                return(
                    <div className="noData">
                        <div className="noData__container">
                            <h1 className="noData__title">Uwaga!</h1>
                            <p className="noData__description">
                                Aby rozpocząć analizę spędzonego czasu na danej stronie kliknij w start
                            </p>
                        </div>
                        <button onClick={() => history.push('trace/add')} className="noData__btn">+</button>
                    </div>
                );
            } else {
                return(
                    <div className="trace-list__container">
                        <form onSubmit={this.handleAddTrace} className="trace-list__form">
                            <div className="trace-list__form__group">
                                <input
                                    onChange={this.handleChangeInputValue}
                                    className="trace-list__form__input"
                                    type="text"
                                    name="url"
                                    defaultValue={this.state.input_values.url.value}
                                />
                            </div>
                            <button className="trace-list__form__submit">+</button>
                        </form>
                        <div
                            className="trace-list__box"
                            style={this.props.traces.data.length >= 6
                                ? { 'overflowY': 'scroll' }
                                : null
                            }
                        >
                            {this.props.traces.data.map((trace) =>
                                <TraceItem
                                    key={trace.id}
                                    id={trace.id}
                                    url={trace.trace_url}
                                    duration={trace.duration}
                                />
                            )}
                        </div>
                    </div>
                );
            }
        }
    }
}