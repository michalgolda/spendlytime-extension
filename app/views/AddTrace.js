import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertStringUrl } from '../utils';
import { tracesActions } from '../actions';
import { bindActionCreators } from 'redux';
import { history } from '../helpers';

@connect(
    state => ({
        browserData: state.browserData
    }),
    dispatch => ({
        actions: bindActionCreators(tracesActions, dispatch)
    })
)
export default class AddTrace extends Component{

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

        history.push('/popup.html');
    }

    render(){
        return(
            <div className="add-trace__wrapper">
                <div className="add-trace__texts">
                    <h1 className="add-trace__texts__title">Zaczynajmy!</h1>
                    <p className="add-trace__texts__description">
                    Aby zacząc analizwać spędzony czas na danej stronie kliknij w start
                    </p>
                </div>
                <form onSubmit={this.handleAddTrace} className="add-trace__form">
                    <div className="add-trace__form__group">
                        <label className="add-trace__form__label">Adres URL strony</label>
                        <input
                            onChange={this.handleChangeInputValue}
                            defaultValue={this.state.input_values.url.value}
                            type="text"
                            className="add-trace__form__input add-trace__form__input_url"
                        />
                    </div>
                    <button className="add-trace__form__submit">Start</button>
                </form>
            </div>
        );
    }
}