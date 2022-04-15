import React from "react";
import "./TokenBuy.css"
import { useHistory, useParams } from 'react-router-dom'
import { useStateValue } from "./StateProvide";

function TokenBuy() {
    const { id } = useParams()
    const [{accountInfo }] = useStateValue();


  return <div className="token-page">
  <div className="buy-info">

  <div className="informations">
  <p>Your Balance: {accountInfo[0] ? accountInfo[0].balance : "User Balance"}</p> 
  <p>Your Address: {accountInfo[0] ? accountInfo[0].address : "User Address"}</p> 
  </div>
  
  <div className="token-buy">
    <p> BUY SOME TOKEN </p>
  </div>

  </div>

  </div>;
}

export default TokenBuy;
