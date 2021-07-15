import React from "react";
import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";

const Section = styled.section`
  display: flex;
  flex-direction: column;
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
  margin-right: 3em;
`;

const Date = styled.span`
  color: red;
`;

const Icon = styled.i`
  background-color: #3326ae;
  color: #fff;
  padding: .4em;
  border-radius: .2em;
`;

const Text = styled.h6`
  margin: 0;
`;

function BeneficiaryList() {
  return (
    <Section>
      <h3>Recent Transactions</h3>
      <FlexContainer>
        <Icon>
          <GiShoppingCart />
        </Icon>
        <Span>
          <h4 style={{ margin: "0" }}>Send Money</h4>
          <Text>to: Olashina Quadri</Text>
        </Span>
        <h5>$34.5</h5>
        <Date>
          <Text>Tue. 12 June, 2021</Text>
          <Text>11:46am</Text>
        </Date>
      </FlexContainer>
    </Section>
  );
}

export default BeneficiaryList;
