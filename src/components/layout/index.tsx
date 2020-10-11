import React from 'react'

import { Grid } from './styles'
import ServerList from '../server-list'
import ServerName from '../server-name'
import ChannelInfo from '../channel-info'
import ChannelList from '../channel-list'
import UserInfo from '../user-info'
import UserList from '../user-list'
import ChannelData from '../channel-data'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  )
}

export default Layout
