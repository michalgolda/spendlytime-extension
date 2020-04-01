import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WithAuth, TraceItem, LoadingSpin } from '../../components';
import style from './TraceList.css';
import { convertStringUrl } from '../../utils';
import * as TracesActions from '../../actions';


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
            'new_trace_url': ''
        }

        this.handleAddTrace = this.handleAddTrace.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    componentDidMount(){
        this.props.actions.fetchTraces();
    }

    handleUrlChange(e){
        this.setState({ new_trace_url: e.target.value });
        console.log(e.target.value);
    }

    handleAddTrace(url){
        const data = {
            'trace_url': url
        }

        this.props.actions.addTrace(data);
    }

    render(){
        const currentUrl = convertStringUrl(this.props.browserData.currentTab.url);

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
                        <form onSubmit={this.handleAddTrace(this.state.new_trace_url)} className={style.form}>
                            <div className={style.form__container}>
                                <input onChange={this.handleUrlChange} className={style.form__input} type="text" defaultValue={currentUrl.origin}/>
                            </div>
                            <button className={style.form__submit}>+</button>
                        </form>
                        <div className={style.list}>
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