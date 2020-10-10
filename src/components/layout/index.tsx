import React from 'react'

import { Grid } from './styles'
import ServerList from '../server-list'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  )
}

export default Layout
