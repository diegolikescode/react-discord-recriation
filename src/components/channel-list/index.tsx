import React from 'react'

import { Container, Category, AddCategoryIcon } from './styles'

import ChannelButton from '../channel-button'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="bat-chat" />
      <ChannelButton channelName="waifus-batman" />
      <ChannelButton channelName="bat-phone" />
      <ChannelButton channelName="bat-lolzinho" />
      <ChannelButton channelName="bat-robin" />
      <ChannelButton channelName="bat-catwoman" />
    </Container>
  )
}

export default ChannelList
