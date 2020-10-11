import React from 'react'

import { Container, Avatar, Message, Header, Content } from './styles'

export interface MessageProps {
  author: string
  date: string
  content: string | React.ReactElement | React.ReactNode
  hasMention?: boolean
  isBot?: boolean
}

const ChannelMessage: React.FC<MessageProps> = ({
  author,
  date,
  content,
  hasMention,
  isBot
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>Bot</span>}
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  )
}

export default ChannelMessage
