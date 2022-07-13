import React from "react";
import {
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:00923004111898">00923004111898</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:umarsaeedcheema68@gmail.com">
            umarsaeedcheema68@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning to Code, Coding to Learn</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/umarsaeedcheema">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/umar-saeed-c-3b3706155/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons>
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons> */}
          <WhatsAppWidget
            phoneNumber="3004111898"
            companyName="Umar"
            replyTimeText="Typically replies within 2 hours"
          />
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
