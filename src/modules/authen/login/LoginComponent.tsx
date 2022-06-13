import React, {Component} from 'react';
import {observer} from "mobx-react";
import "./LoginStyle.scss";
import Input from "../../../common/form/components/Input";
import FormGroup from "../../../common/form/components/FormGroup";
import {loginStore} from "./LoginStore";
import Validations from "../../../common/form/components/Validations";
import {Link, Redirect} from "react-router-dom";
import {css} from "@emotion/core";
import StorageService from "../../../common/service/StorageService";
import {profileStore} from "../../profile/ProfileStore";

@observer
class LoginComponent extends Component {

    render() {
        if (profileStore.getProfile) {
            return <Redirect to={'/'}/>
        } else return (
            <div className="container-fluid d-flex align-content-center">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h1 className="text-center mt-5 mb-5">
                            <span className="text-primary">H</span>ello&nbsp;
                            <span className="text-primary">U</span>ser
                        </h1>
                        <div className="">
                            <input
                                type="text"
                                id="login"
                                className="fadeIn first"
                                name="login"
                                placeholder="user"
                                onChange={(e) => {
                                    loginStore.setUserNameValue(e)
                                }}
                                onKeyDown={(e) => loginStore.enterLogin(e)}

                            />
                            <p className="error text-danger mt-3">{loginStore.FormError && loginStore.FormError.name}</p>
                        </div>

                        <div className="">
                            <input
                                type="password"
                                className="fadeIn second"
                                name="login"
                                placeholder="password"
                                onChange={(e) => {
                                    loginStore.setPassValue(e)
                                }}
                                onKeyDown={(e) => loginStore.enterLogin(e)}
                            />
                            <p className="error text-danger mt-3">{loginStore.FormError && loginStore.FormError.pass}</p>
                        </div>

                        <div className="">
                            <input
                                type="button"
                                className="fadeIn third"
                                onClick={
                                    () => loginStore.Login()
                                }
                                value="Login"
                            />
                            <p className="error">{loginStore.FormError && loginStore.FormError.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;