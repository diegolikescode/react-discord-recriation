import React from 'react'

import {
  Container,
  Avatar,
  UserData,
  Icons,
  Profile,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Bat Manteiga</strong>
          <span>#666</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo
