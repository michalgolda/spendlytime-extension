import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './AddTrace.css';
import { convertStringUrl } from '../../utils';
import { tracesActions } from '../../actions';
import { bindActionCreators } from 'redux';
import { history } from '../../helpers';

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
            <div className={style.wrapper}>
                <div className={style.texts}>
                    <h1 className={style.texts__title}>Zaczynajmy!</h1>
                    <p className={style.texts__description}>
                    Aby zacząc analizwać spędzony czas na danej stronie kliknij w start
                    </p>
                </div>
                <form onSubmit={this.handleAddTrace} className={style.form}>
                    <div className={style.form__group}>
                        <label className={style.form__label}>Adres URL strony</label>
                        <input 
                            onChange={this.handleChangeInputValue} 
                            defaultValue={this.state.input_values.url.value} 
                            type="text" 
                            className={`${style.form__input} ${style.form__input_url}`}
                        />
                    </div>
                    <button className={style.form__submit}>Start</button>
                </form>
            </div>
        );
    }
}