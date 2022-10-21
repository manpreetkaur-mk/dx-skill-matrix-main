import { Card, CardContent, Typography } from '@mui/material'

import Header from '../../components/Header/Header'

const Notifications = () => {
  return (
    <>
      <Header title="Notifications"/>
      <Card>
        <CardContent>
          <Typography>This is a Notifications page</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Notifications