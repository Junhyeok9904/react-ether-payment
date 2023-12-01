import React, { useState, useEffect } from 'react';
import { BrowserProvider, ethers } from 'ethers';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ModalBoot from 'react-bootstrap/Modal';
export const PayMent = (props) => {
  const { data } = props;
  const { account } = props;
  const { contract } = props;
  const [editshow, setEditShow] = useState(true);
  const [submitshow, setSubmitShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const handleEditOpen = () => {setSubmitShow(false); setEditShow(true)};
  const handleEditClose = () => setEditShow(false);
  const handleSubmitClose = () => setSubmitShow(false);
  const handleSubmitOpen = () => {setEditShow(false); setSubmitShow(true);}
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const submitTransaction = async () => {
    console.log(`submiting trasaction`);
    // Get singer 
    let signer = await new ethers.BrowserProvider(window.ethereum).getSigner();
    // Send the transaction
    const tx = await contract.connect(signer).submitTransfer(data, amount);
    // Wait for the transaction to be included
    await tx.wait();
  };
  const editModal = () => (
    <>
      <ModalBoot show={editshow} onHide={handleEditClose}>
        <ModalBoot.Header >
          <ModalBoot.Title>PayMent</ModalBoot.Title>
        </ModalBoot.Header>
        <ModalBoot.Body >
          <FloatingLabel controlId="floatingInput" label="Ethereum address" className="mb-3">
            <Form.Control type="data" placeholder="data" value={data} readOnly/>
          </FloatingLabel>
          <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Amount">
              <Form.Control type="amount" placeholder="amount" value={amount} onChange={handleAmountChange}/>
            </FloatingLabel>
            {(isNaN(amount) || amount <= 0) && <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmitOpen} disabled> submit </Button>}
            {amount >= 1 && <Button variant="outline-primary" id="button-addon2" onClick={handleSubmitOpen}> submit </Button>}
          </InputGroup>
        </ModalBoot.Body>
      </ModalBoot>
    </>
  )
  const submitModal = () => (
    <>
      <ModalBoot show={submitshow} onHide={handleSubmitClose}>
        <ModalBoot.Header >
          <ModalBoot.Title>PayMent</ModalBoot.Title>
        </ModalBoot.Header>
        <ModalBoot.Body >
          <FloatingLabel controlId="floatingInput" label="Ethereum address" className="mb-3">
            <Form.Control type="data" placeholder="data" value={data} readOnly/>
          </FloatingLabel>
          <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingInput" label="Amount">
              <Form.Control type="amount" placeholder="Amount" value={amount} readOnly/>
            </FloatingLabel>
            
          </InputGroup>
          <Button variant="outline-primary" id="button-addon2" onClick={submitTransaction}> submit </Button>
          <Button variant="outline-danger" id="button-addon2" onClick={handleEditOpen}> edit </Button>
        </ModalBoot.Body>
      </ModalBoot>
    </>
  )
  return (
    <div className="PayMent">
      {editshow && editModal()}
      {submitshow && submitModal()}
    </div>
    );
};
  
export default PayMent;