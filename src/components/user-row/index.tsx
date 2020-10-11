import React from 'react'

import { User, Avatar } from './styles'

interface UserProps {
  nickname: string
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>bot</span>}
    </User>
  )
}

export default UserRow
