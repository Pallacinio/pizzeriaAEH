import React from 'react';
import styled from 'styled-components';
import { colorGreen } from '../Styles/colors';
import { Title } from '../Styles/title';

const FooterStyled = styled.div`
  background-color: ${colorGreen};
  padding: 16px;
  position: relative;
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterNumber = styled(Title)`
  font-size: 20px;
  display: flex;
  gap: 10px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
  img {
    height: 30px;
  }
`;

const FooterIcons = styled(Title)`
  font-size: 20px;
  text-shadow: 1px 1px 4px #380502;
  img {
    height: 30px;
  }
  a {
    color: white;
    text-decoration: none;
    display: flex;
    gap: 10px;
  }
  p {
    margin: 0;
  }
`;


export function Footer() {
  return (
    <FooterStyled>
      <FooterNumber>
        <img src="img/phone.png" alt='słuchawka'/>
        INFOLINIA 678 432 321
      </FooterNumber>
      <FooterIcons>
        {/* <img src="..//img/facebook.png" /> */}
        <a href="facebook.com">
          <img src="img/facebook.png" alt='facebook'/>
          <p>Facebook</p>
        </a>
      </FooterIcons>
      <FooterIcons>
        {/* <img src="..//img/instagram.png" /> */}
        <a href="instagram.com">
          <img src="img/instagram.png" alt='instagram'/>
          <p>Instagram</p>
        </a>
      </FooterIcons>
    </FooterStyled>
  );
}
