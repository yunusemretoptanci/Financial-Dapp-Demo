import React, { useEffect } from "react";
import { useState } from "react";
import "./Login.css"
import {useNavigate} from "react-router-dom";
import { useStateValue } from "./StateProvide";

function Login(props) {
  let navigate = useNavigate();
  const[currentAccount,setCurrentAccount]=useState(false);
  const [{}, dispatch] = useStateValue();

  var accountAddress="";
  var accountBalance=0;

  const sendData = () => {
    dispatch({
      type: "SEND_DATA",
      item: {
        balance:accountBalance,
       address:accountAddress,
      },
    });
  };
  
   const detectProvider=()=>{
     let provider;
     if(window.ethereum){
       provider=window.ethereum;
     }else if(window.web3){
       provider=window.web3.currentProvider;
     }else{
       window.alert("No wallet");
     }
     return provider;
   }

   const onLoginHandler=async()=>{
     const provider=detectProvider();
     await provider.request({
       method:"eth_requestAccounts",
     });

     window.ethereum.on('accountsChanged', (accounts) => {
      if (!accounts.length) {
        setCurrentAccount(false)
        props.onLogout()
      }
  });
    
     var Web3 = require('web3');
     var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

  const accounts = await web3.eth.getAccounts(); 

  accounts&&setCurrentAccount(true);
  accounts&&props.walletAddress(accounts[0]);
  accountAddress=accounts[0];


  web3.eth.getBalance(accounts[0], function(err, balance) {
    if (err === null) {
      accountBalance=balance;
      sendData();
     if(balance==0){
    navigate(`/${accounts[0]}`);
     }else if(balance>0){
       navigate("/profilePage")
     }
    }})
    
   }

  useEffect( () => {
    currentAccount&&props.onLogin();
}, [currentAccount]);
   
  return <div className="login-page">
    <div className="login-box">
    <button onClick={onLoginHandler}>Connect Wallet</button>
    </div>
  </div>;
}

export default Login;
