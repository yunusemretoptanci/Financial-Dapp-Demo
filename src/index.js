import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TokenBuy from './TokenBuy';
import ProfilePage from './ProfilePage';
import { StateProvider} from "./StateProvide";
import reducer, { initialState } from "./reducer";




ReactDOM.render(
  
  <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<TokenBuy />} /> 
      <Route path='/profilePage' element={<ProfilePage />} /> 
    </Routes>
  </BrowserRouter>
  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
