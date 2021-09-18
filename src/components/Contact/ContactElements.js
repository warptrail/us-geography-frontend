import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';

export const ContactBox = styled.div`
  background: #0d0d0d;
  position: fixed;

  border: 3px solid #8ac007;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  bottom: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isContactToggled }) => (isContactToggled ? '100%' : '0%')};
  bottom: ${({ isContactToggled }) => (isContactToggled ? '0' : '-100%')};
  left: 50%;
  transform: translate(-50%, 0);
`;

export const IconButton = styled.button`
  display: flex;
  position: relative;
  border: 0;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  background-color: #0d0d0d;
`;

export const CloseIcon = styled(FaWindowClose)`
  font-size: 2rem;
  color: #780f0f;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: #db1515;
  }
`;

export const ContactMessage = styled.p`
  color: white;
  font-size: clamp(1.4rem, 0.8182rem + 2.9091vw, 1.5rem);
  text-align: center;
  margin-top: 14px;
  margin-bottom: 10px;
`;

export const Warptrail = styled.a`
  text-decoration: none;
  color: black;
  position: absolute;
  top: 10px;
  right: 5px;
  text-align: center;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`;

export const Vcf = styled.a`
  text-decoration: none;
  color: #8ac007;
`;

export const ImgFrame = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 18px;
`;
export const QR = styled.img`
  width: 90%;
`;
