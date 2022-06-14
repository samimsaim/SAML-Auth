import Header, {test} from "./header";
import Footer from "./footer";
import { Component } from "react";
import { config } from '../config';
import { PublicClientApplication } from "@azure/msal-browser";
import React,{useState} from 'react';

function Home(props){

  return(
    <div>
    <Header />
    
    <Footer />
    </div>
  );

}
export default Home;
