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
  background-color: #F7F8FFff;
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
          <h4>Send Money</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>Fund Wallet</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>Withdraw</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>School Bills</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>CableTv Bills</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>PHCN Bill</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>Airtime Topup</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>PHCN Bill</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
      <FlexContainer>
        <AiOutlineSend />
        <Span>
          <h4>PHCN Bill</h4>
        </Span>
        <i><BsForwardFill /></i>
      </FlexContainer>
    </Section>
  );
}

export default PaymentList;
