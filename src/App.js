import React,{useState} from 'react';
import LoginForm from "./component/LoginForm";
import Cod from "./component/cod";
import { config } from './config';
import { PublicClientApplication } from "@azure/msal-browser";
import { Component } from "react";
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/HomePage';

class App extends Header {

render(){
  return (
    <div>

  <Home />
    </div>
  );
}


}




export default App;
