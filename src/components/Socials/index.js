import React from 'react';

import {
  SocialsBox,
  SocialIconFrame,
  Website,
  Email,
  LinkedIn,
  Github,
  FaceBook,
} from './SocialsElements';

const links = {
  website: 'https://ryanwhitmore.dev/',
  email:
    'https://gist.githubusercontent.com/warptrail/e8719df085ccb891310ccb5c80618b54/raw/6410274344a22517d39738847522bbb9bec0be85/gistfile1.txt',
  linkedIn: 'https://www.linkedin.com/in/ryanwhitmoredev/',
  github: 'https://github.com/warptrail',
  faceBook: 'https://www.facebook.com/Warptrail',
};

const Socials = () => {
  return (
    <SocialsBox>
      {/* Website */}
      <SocialIconFrame
        href={links.website}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Website />

        {/* Email */}
      </SocialIconFrame>
      <SocialIconFrame
        href={links.email}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Email />
      </SocialIconFrame>

      {/* LinkedIn */}
      <SocialIconFrame
        href={links.linkedIn}
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedIn />
      </SocialIconFrame>

      {/* Github */}
      <SocialIconFrame
        href={links.github}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github />
      </SocialIconFrame>

      {/* SoundCloud */}
      <SocialIconFrame
        href={links.faceBook}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaceBook />
      </SocialIconFrame>
    </SocialsBox>
  );
};

export default Socials;
