import React from 'react'

import { Container, Role } from './styles'

import UserRow from '../user-row'

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Bat Manteiga"></UserRow>

      <Role>Offline - alguns</Role>
      <UserRow nickname="Robin" isBot={true}></UserRow>

      <UserRow nickname="xqdl" />
      <UserRow nickname="deregue" />
      <UserRow nickname="johnson" />
      <UserRow nickname="xãmá" />
      <UserRow nickname="no bresque" />
      <UserRow nickname="bagulho" />
      <UserRow nickname="é muito" />
      <UserRow nickname="doido" />
      <UserRow nickname="xqdancia" />
      <UserRow nickname="xqloiro" />
      <UserRow nickname="fontrabiri" />
      <UserRow nickname="LeBlanc" />
      <UserRow nickname="Fiora" />
      <UserRow nickname="Cassandra" />
      <UserRow nickname="Jinx" />
      <UserRow nickname="Jinx é linda" />
      <UserRow nickname="Jinx é perfeita e digo mais, era só isso que tinha para dizer" />
    </Container>
  )
}

export default UserList
