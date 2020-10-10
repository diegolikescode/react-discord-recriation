import React from 'react'

import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelName: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>bat-chat</Title>

      <Separator />
      <Description>
        Canal onde o Batman recebe as notícias de Gotham
      </Description>
    </Container>
  )
}

export default ChannelName
