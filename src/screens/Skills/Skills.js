import { Card, CardContent, Typography } from '@mui/material'

import Header from '../../components/Header/Header'

const Skills = () => {
  return (
    <>
      <Header title="Skills" searchBar buttonTitle="Add Skill"/>
      <Card>
        <CardContent>
          <Typography>This is a Skills page</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Skills