import React from "react";
import styled from "styled-components";
import "../../Authentication/authentication.css";

const Section = styled.section`
  position: absolute;
  width: 450px;
  height: auto;
  margin-top: 0;
  padding: 2em;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  font-size: 1em;
  padding: 1.2em 1.7em 1.2em 1.7em;
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  border-radius: 20px;
  border: none;
  background: #ebebeb;
  outline: none;
  font-weight: bold;
  transition: 0.4s;
`;

const Text = styled.h4`
  text-align: center;
`;

const Button = styled.button`
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.8em 1em 0.8em 1em !important;
  transition: 0.5s;
  border: 1px solid #ebebeb;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  background:#57b846;
    color:#fff;
    width: 100%;
`;

const CloseIcon = styled.a`
  position: absolute;
`;

function Send({closeModal}) {
  return (
    <Section>
      <CloseIcon onClick={() => {closeModal(false)}}>X</CloseIcon>
      <Text>Send Money</Text>
      <form>
        <Input type="number" placeholder="Account Number" />
        <Input type="text" placeholder="Account Name" />
        <Input type="text" placeholder="Bank" />
        <Input type="number" placeholder="Amount" />
        <Button type="button" className="btn signup">
          Send
        </Button>
        <p>
          Clicking <strong>Send</strong> you understand that
          this transaction cannot be refunded <a href="javascript:void(0)">terms of services</a>.
        </p>
        <hr />
      </form>
    </Section>
  );
}

export default Send;
