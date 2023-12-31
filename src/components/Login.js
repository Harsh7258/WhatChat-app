import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import 'firebase/compat/app'

import firebase from 'firebase/compat/app'
import {auth}  from '../firebase';

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to WhatChat!</h2>
                <div className="login-button google"
                onClick={() => auth.signInWithRedirect(new  firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined style={{paddingRight: "10px"}}/>
                    SignIn with Google
                </div>
                <br/> <br/>
                <div className="login-button facebook">
                    <FacebookOutlined style={{paddingRight: "10px"}}/>
                    SignIn with Facebook
                </div>
            </div>
        </div>
    );
};

export default Login;