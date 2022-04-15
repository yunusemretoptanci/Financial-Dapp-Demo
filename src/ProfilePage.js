import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { useStateValue } from "./StateProvide";

function ProfilePage() {
  const [{accountInfo }] = useStateValue();
  var Web3 = require('web3');
  var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
  const[input,setInput]=useState();


  const signIn=()=>{
    
    if(input){
      window.alert("Your username: " + input +"\n"+"Wallet Address: "+ accountInfo[0].address)

      var message = input
      var hash = web3.utils.sha3(message)
      web3.eth.sign(hash, accountInfo[0].address, function(error, signature) {
      })
    }else{
      window.alert("Enter your username");
    }
  }

  const handleChange=(event)=>{
    setInput(event.target.value);
  }

  return <div className="profile-page">

<div className="form-sign">

<div className="user-input">
<p>Wallet Address:</p>
<p>{accountInfo[0]&& accountInfo[0].address}</p>
<form onSubmit={e=>e.preventDefault()}>
  <label>
    Username:
    <input  value={input} onChange={handleChange} type="text" name="username" />
  </label>
</form>
</div>

  
  <div className="sign-button" onClick={signIn}>
    <p> SIGN IN </p>
  </div>

  </div>

  </div>;
}

export default ProfilePage;
