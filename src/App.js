import { useState } from 'react';
import './App.css';
import Login from './Login';

function App(props) {
  const[isConnected,setIsConnected]=useState(false);
  var userWalletAddress="";
  
  const onLogin=()=>{
    setIsConnected(true)
  }
  const onLogout=()=>{
    setIsConnected(false)
  }
  const getWallet=(value)=>{
    userWalletAddress=value;

  }

  return (
    
    <div className="App">
     <Login onLogin={onLogin} onLogout={onLogout} walletAddress={getWallet}/>
     
    </div>
  );
}

export default App;
