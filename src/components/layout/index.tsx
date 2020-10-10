import React from 'react'

import { Grid } from './styles'
import ServerList from '../server-list'
import ServerName from '../server-name'
import ChannelInfo from '../channel-info'
import ChannelList from '../channel-list'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grid>
  )
}

export default Layout
