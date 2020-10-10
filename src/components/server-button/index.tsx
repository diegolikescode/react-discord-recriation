import React from 'react'

import Logo from '../../assets/logo.svg'
import { Button } from './styles'

export interface Props {
  selected?: boolean
  isHome?: boolean
  hasNotification?: boolean
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions
}) => {
  return (
    <Button
      mentions={mentions}
      hasNotification={hasNotification}
      className={selected ? 'active' : ''}
      isHome={isHome}
    >
      {isHome && <img src={Logo} alt="Início" />}
    </Button>
  )
}

export default ServerButton
