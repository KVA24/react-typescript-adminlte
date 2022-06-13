import React from 'react';
import {Route} from 'react-router-dom';
import LoginComponent from "../authen/login/LoginComponent";
import Role from '../role/index'
import Profile from '../profile/component/Profile'

export default function Redirect() {
    return (
        <div>
            <Route exact path="/" component={Role}/>
            <Route path={`/login`} component={LoginComponent}/>
            <Route path={`/profile`} component={Profile}/>
        </div>
    )
}
