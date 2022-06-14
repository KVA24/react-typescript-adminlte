import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {loginStore} from "../authen/login/LoginStore";
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import {profileStore} from "../profile/ProfileStore";
import StorageService from "../../common/service/StorageService";
import Logo from "../../asset/images/logo-v1.png"

@observer
class Nav extends Component {
    render() {
        if(StorageService.getToken()){
            return (
                <div className="">
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i
                                    className="fas fa-bars"/></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="/" className="nav-link text-uppercase">HOME</a>
                            </li>
                        </ul>
                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                    <i className="fas fa-expand-arrows-alt"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to={`/profile`} >
                                    <a className="nav-link"
                                       role="button"
                                    >PROFILE</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   role="button"
                                   onClick={()=> loginStore.logOut()}
                                >LOGOUT</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            );
        }
        else return true
    }
}

export default Nav;
