import React from 'react';
import {Route} from 'react-router-dom';
import LoginComponent from "../authen/login/LoginComponent";
import Role from '../role/index'

export default function Redirect() {
    return (
        <div>
            <Route exact path="/" component={Role}/>
            <Route path={`/login`} component={LoginComponent}/>

        </div>
    )
}
