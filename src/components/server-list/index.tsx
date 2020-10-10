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
      <ServerButton mentions={66} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={69} />
      <ServerButton />
    </Container>
  )
}

export default ServerList
