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
                                <a href="/" className="nav-link">Home</a>
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

const logoProfile = css`
    color: #3e3c4f;
    border: none;
    width: 35px;
    height: 35px;
    background-color: rgba(129, 125, 161, 0.18);
`;
const cssLogo = css`
    max-width: 92% !important;
    height: auto !important;
`;

const css_left = css`
    padding-left: 10px !important;
`;

const css_nav = css`
&:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(rgba(48,56,70,.2),rgba(48,56,70,0));
    pointer-events: none;
    z-index: 4;
}
`;
