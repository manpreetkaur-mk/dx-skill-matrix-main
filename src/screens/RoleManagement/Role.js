import { Card, CardContent, Typography } from '@mui/material'

import Header from '../../components/Header/Header'

const Management = () => {
  return (
    <>
      <Header title="User Management" searchBar buttonTitle="Add Role"/>
      <Card>
        <CardContent>
          <Typography>This is a User Management page</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Management