import React from "react";
import { BsForwardFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";

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
  background-color: #00c3f8;
  border-radius: .4em;
  padding: .1em 1em;
  margin: .2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Span = styled.span`
  margin-left: 1em;
  margin-right: 2em;
`;

function PaymentList() {
  return (
    <Section>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>Send Money</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>Fund Wallet</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>Withdraw</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>School Bills</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>CableTv Bills</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h3>PHCN Bill</h3>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
    </Section>
  );
}

export default PaymentList;
