import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2';
import Admin from './Admin';
import { MetaMaskProvider } from '@metamask/sdk-react';
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetaMaskProvider debug={false} sdkOptions={{
      checkInstallationImmediately: false,
      dappMetadata: {
        name: "Demo React App",
        url: window.location.host,
      }
    }}>
      <BrowserRouter> 
        <Routes>
          <Route path="/admin" element={ <Admin /> } /> 
          <Route path="*" element={ <App2 /> } /> 
        </Routes>
      </BrowserRouter>
      
    </MetaMaskProvider>
  </React.StrictMode>
);

