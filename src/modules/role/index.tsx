import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withLogin } from '../requireLoginHoc/requireLoginHoc';
import { profileStore } from '../profile/ProfileStore';
import { Redirect } from 'react-router';
import {Role} from "../users/UserModel";

@observer
class index extends Component {

    render() {
       if(profileStore.getProfile){
           if(profileStore.getProfile.role === Role.PAYMENT_MYTEL){
               return <Redirect to="/transaction"/>
           }else  return <Redirect to="/game-list"/>
       }else return true

    }
}

export default withLogin(index);