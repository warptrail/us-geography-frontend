import React from 'react';
import contactQR from '../../img/qr.png';
import {
  ContactMessage,
  ContactBox,
  IconButton,
  Warptrail,
  ImgFrame,
  CloseIcon,
  QR,
  Vcf,
} from './ContactElements';

const myPortfolio = 'https://ryanwhitmore.dev/';

const Contact = ({ toggle, isContactToggled }) => {
  return (
    <ContactBox isContactToggled={isContactToggled}>
      <IconButton onClick={toggle}>
        <CloseIcon />
      </IconButton>
      <Warptrail href={myPortfolio} target="_blank" rel="noreferrer noopener">
        Check out my Portfolio Page
      </Warptrail>
      <ContactMessage>
        Scan this code to add me to your contacts! Or download my contact card
        in vcf format <Vcf href="http://localhost:8080/download">here</Vcf>
      </ContactMessage>
      <ImgFrame>
        <QR src={contactQR} />
      </ImgFrame>
    </ContactBox>
  );
};
export default Contact;
