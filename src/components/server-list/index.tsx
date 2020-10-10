import React from 'react'

import { Container, Separator } from './styles'
import ServerButton from '../server-button'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />

      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton mentions={7} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={69} />
      <ServerButton hasNotification />
    </Container>
  )
}

export default ServerList
