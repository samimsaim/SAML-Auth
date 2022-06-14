import React, {useState} from "react";
import Page from "./cod";
import { config } from '../config';
import { PublicClientApplication } from "@azure/msal-browser";
import { Component } from "react";
import logo from './logs/mizzo.png';
import Cod from "./cod";
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {}
    };

  this.login = this.login.bind(this)

  this.PublicClientApplication = new PublicClientApplication({
    auth: {
      clientId: config.appId,
      redirectUri: config.redirectUri,
      authority: config.authority
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true
    }
  });
}
async login(){
  try {
    await this.PublicClientApplication.loginPopup(
      {
      scopes:config.scopes,
      prompt: "select_account"
    });
   this.setState({isAuthenticated:true})

  }
  catch(err){
    this.setState({
      isAuthenticated:false,
      user: {},
      error: err
    });
  }
}

logout() {
  this.PublicClientApplication.logout();
}



render(){
  return (
<header>
    {this.state.isAuthenticated ? <span><img className="logo" src={logo} alt="Logo" />
      <input className="test" type="button" value="LogOut" onClick={() => this.login()} /></span>:

    <div>
    <img className="logo" src={logo} alt="Logo" />
    <input className="test" type="button" value="login" onClick={() => this.login()} />
    </div>

}
</header>

  )
}
}
export default Header;
