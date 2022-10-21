import { Avatar, Button, Card, CardContent, Paper, Typography } from '@mui/material'
import { Cancel, ChevronLeft } from '@mui/icons-material'

import { Box } from '@mui/system';
import Header from '../../components/Header/Header'
import React from 'react'
import {useNavigate} from 'react-router-dom';

const EditCertificate = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header title="Edit Certificate"/>
      <Card>
        <CardContent>
            <Button onClick={() => navigate(-1)} variant="text" startIcon={<ChevronLeft size='small'/>} sx={{color:'#34D48F'}}>Back</Button>
            <Box ml={1} mt={3} >
              <Typography variant='body1'>Certificate Logo</Typography>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  mt: 2,
                  width: 128,
                  height: 128,
                },
                }}>
                <Paper elevation={3} sx={{position:"relative", borderRadius:2, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Cancel
                    alignself="end"
                    fontSize='small'
                    sx={{ position: "absolute", top: "5px", right: "5px", cursor: "pointer", color: "#EA5D5D" }}
                    // onClick={toCloseDrawer}
                  />
                  <Avatar
                        sx={{width: "100px", height:"100px"}}
                        src="https://spng.subpng.com/20190123/ktl/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c23034f9.2474238715482771861975.jpg"
                    />
                </Paper>
              </Box>
              
              
            </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default EditCertificate