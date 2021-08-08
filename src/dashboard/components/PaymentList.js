import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const notify = () => toast("opps, still under development !");
  return (
    <Section>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={sendMoney} />
        <Span>
          <h5>Send Money</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={wallet} />
        <Span>
          <h5>Fund Wallet</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={withdrawal} />
        <Span>
          <h5>Withdraw</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={bill} />
        <Span>
          <h5>School Bills</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={cable} />
        <Span>
          <h5>CableTv Bills</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      <a onClick={notify}>
      <FlexContainer>
        <img style={{ width: "35px" }} src={topup} />
        <Span>
          <h5>Airtime</h5>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      </a>
      { openModal && <Send closeModal={setOpenModal} /> }
      <ToastContainer />
    </Section>
  );
}

export default PaymentList;
