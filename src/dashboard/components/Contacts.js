import React from "react";
import image from "../img/portrait_man.jpg";
import styled from "styled-components";

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

const Image = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  margin-left: .3em;
`;

const ImageContainer = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: row;
  background-color: #F7F8FFff;
  border-radius: .4em;
  padding: .3em;
  overflow-x: scroll;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2.5em;
  }
`;

function Contacts() {
  return (
    <Section>
      <h3>Contacts</h3>
      <ImageContainer>
        <Image src={image} />
        <Image src={image} />
        <Image src={image} />
        <Image src={image} />
        <Image src={image} />
        <Image src={image} />
        <Image src={image} />
      </ImageContainer>
    </Section>
  );
}

export default Contacts;
