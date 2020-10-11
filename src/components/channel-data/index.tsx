import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import { Mention } from '../channel-message/styles'

import ChannelMessage from '../channel-message'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>
  useEffect(() => {
    const div = messageRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Bat Manteiga"
            date="32/13/1666"
            content="Crying Lightning, and how you like to aggravate the ice-cream man on rainy afternoons"
          />
        ))}

        <ChannelMessage
          isBot
          author="Robin"
          date="32/13/1666"
          content={
            <>
              <Mention>@Bat Manteiga</Mention>, o batphone tocou a noite toda,
              devemos sair combater o crime? Hoje tem novela e acho que o Tufão
              vai descobrir que é corno
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #bat-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
