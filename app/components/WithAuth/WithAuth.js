import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { loggedIn } from '../../utils';

export default function WithAuth(WrappedComponent){
    class WithAuthComponent extends Component{
        render(){
            if(!loggedIn){
                return <Redirect to="/login"/>;
            } else {
                return <WrappedComponent {...this.props}/>
            }
        }
    }

    return WithAuthComponent;
}