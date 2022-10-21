import { Card, CardContent, Typography } from '@mui/material'

import Header from '../../components/Header/Header'

const Project = () => {
  return (
    <>
      <Header title="Projects" searchBar buttonTitle="Add Project"/>
      <Card>
        <CardContent>
          <Typography>This is a Projects page</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Project