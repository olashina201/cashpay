import React from "react";
import { MdNotifications } from "react-icons/md";
import styled from "styled-components";
// import image from "../assets/images/me.png";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
`;

const NameSection = styled.section`
  background-color: white;
  padding: 1px 0.2em;
  border-radius: 1em;
  font-size: .75rem;
  width: 100%;
`;

const Paragraph = styled.p`
  border: none;
  background: none;
  margin-left: 0.5em;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  -webkit-appearance: none;
`;

const ApplicationComponent = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopNav = styled.nav`
  text-decoration: none;
  color: var(--space-cadet);
  font-weight: 600;
  margin-left: 2em;
  font-size: 1rem;
`;

const TopNavLink = styled.a`
  text-decoration: none;
  color: var(--space-cadet);
  font-weight: 600;
  margin-left: 2em;
  font-size: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationLink = styled.a`
  text-decoration: none;
  color: var(--space-cadet-transparent);
`;

const ProfilePic = styled.div`
  background-image: url('../assets/images/me.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -.5em;
  width: 1.75em;
  height: 1.75em;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
`;

function Header({ user }) {
  return (
    <HeaderComponent>
      <NameSection>
        <Paragraph>{`Welcome, ${user.firstname}`}</Paragraph>
      </NameSection>
      <ApplicationComponent role="application">
        <TopNav className="navbar-top">
          <TopNavLink href="#">Feedback</TopNavLink>
          <TopNavLink href="#">Contacts</TopNavLink>
          <TopNavLink href="#">Help</TopNavLink>
        </TopNav>
        <ProfileContainer>
          <NotificationLink href="#" className="notification">
            <i>
              <MdNotifications />
            </i>
          </NotificationLink>
          <NotificationLink href="#">
            <ProfilePic></ProfilePic>
          </NotificationLink>
        </ProfileContainer>
      </ApplicationComponent>
    </HeaderComponent>
  );
}

export default Header;
