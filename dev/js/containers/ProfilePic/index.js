import React from 'react';
import ProfilePicContainer from './ProfilePicContainer';
import PicBgContainer from './PicBgContainer';

const ProfilePic = () => (
  <ProfilePicContainer>
    <PicBgContainer>
      <img src="../img/profileavatar.png"/>
    </PicBgContainer>
  </ProfilePicContainer>
);

export default ProfilePic;