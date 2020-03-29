import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function WithAuth(WrappedComponent){
    class WithAuthComponent extends Component{
        constructor(props){
            super(props);

            this.state = { isLogged: false };
        }
        render(){
            if(!this.state.isLogged){
                return <Redirect to="/login"/>;
            } else {
                return <WrappedComponent {...this.props}/>
            }
        }
    }

    return WithAuthComponent;
}