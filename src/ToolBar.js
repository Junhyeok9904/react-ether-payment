import React, { useState, useEffect } from 'react';
import { useSDK } from '@metamask/sdk-react';
import { BrowserProvider, ethers } from 'ethers';
import fourPartyModel from './fourPartyModel.json';
import { Button } from 'react-bootstrap';
import { EthrDID } from 'ethr-did';
export const ToolBar = (props) => {
    
    const { account } = props;
    const { contract } = props;
    const [symbol, setSymbol] = useState(null);

    const handleButton = async () => {
        setSymbol(await contract.connect(new BrowserProvider(window.ethereum)).symbol());
        console.log(symbol) // Your button function code here
    };
    return (
      <div className="ToolBar">
      </div>
    );
  };
  
  export default ToolBar;