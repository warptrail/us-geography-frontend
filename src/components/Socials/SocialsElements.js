import styled from 'styled-components';
import {
  FaGlobe,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';

export const SocialsBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;

  top: 12px;
  z-index: 99;
`;

export const SocialIconFrame = styled.a`
  color: white;
  margin: 10px 12px;
  font-size: clamp(0.8125rem, -0.8542rem + 8.3333vw, 1.75rem);
`;

export const Website = styled(FaGlobe)``;
export const Email = styled(FaEnvelope)``;
export const LinkedIn = styled(FaLinkedin)``;
export const Github = styled(FaGithub)``;
export const FaceBook = styled(FaFacebook)``;
