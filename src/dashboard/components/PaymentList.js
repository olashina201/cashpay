import React, { useState } from "react";
import { BsForwardFill } from "react-icons/bs";
import styled from "styled-components";
import Send from "../containers/Send";
import sendMoney from "../../assets/images/exchange.png";
import wallet from "../../assets/images/wallet.png";
import withdrawal from "../../assets/images/withdrawal.png";
import bill from "../../assets/images/receipt.png";
import cable from "../../assets/images/cable-tv.png";
import topup from "../../assets/images/up.png";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3em;
  margin: 1em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  background-color: var(--white);
  border-radius: .4em;
  padding: .1em 1em;
  width: 14em;
  margin: .2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Span = styled.span`
  margin-left: 1em;
  margin-right: 2em;
`;

function PaymentList() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <Section>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={sendMoney} />
        <Span>
          <h4>Send Money</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer onClick={() => {setOpenModal(true)}}>
        <img style={{ width: "35px" }} src={wallet} />
        <Span>
          <h4>Fund Wallet</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={withdrawal} />
        <Span>
          <h4>Withdraw</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={bill} />
        <Span>
          <h4>School Bills</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={cable} />
        <Span>
          <h4>CableTv Bills</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={() => {setOpenModal(true)}}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={topup} />
        <Span>
          <h4>Airtime</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      { openModal && <Send closeModal={setOpenModal} /> }
    </Section>
  );
}

export default PaymentList;
