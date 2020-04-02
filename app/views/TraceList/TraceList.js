import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './TraceList.css';
import { convertStringUrl } from '../../utils';

import { WithAuth, TraceItem, LoadingSpin } from '../../components';
import { TracesActions } from '../../actions';


@connect(
    state => ({
        browserData: state.browserData,
        traces: state.traces
    }),
    dispatch => ({
        actions: bindActionCreators(TracesActions, dispatch)
    })
)
class TraceList extends Component{

    constructor(props){
        super(props);

        this.state = {
            'input_values': {
                'url': {
                    value: convertStringUrl(this.props.browserData.currentTab.url)
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
                        <form onSubmit={this.handleAddTrace} className={style.form}>
                            <div className={style.form__container}>
                                <input
                                    onChange={this.handleChangeInputValue}
                                    className={style.form__input}
                                    type="text"
                                    name="url"
                                    defaultValue={this.state.input_values.url.value}
                                />
                            </div>
                            <button className={style.form__submit}>+</button>
                        </form>
                        <div className={style.list} style={this.props.traces.data.length >= 6 ? { 'overflowY': 'scroll' } : null}>
                            {this.props.traces.data.map((trace) =>
                                <TraceItem key={trace.id} url={trace.trace_url} time={trace.trace_time} />
                            )}
                        </div>
                    </div>
                );
            }
        }
    }
}

export default WithAuth(TraceList);