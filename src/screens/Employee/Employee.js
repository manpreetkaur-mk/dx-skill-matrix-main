import React, { useState } from 'react';
import { Card, CardContent, Button, Grid, TextField, MenuItem, FormControl, Stack, Box } from '@mui/material'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const gridContainer = {
  width: '100%',
  marginTop: 2
}

const subContainer = {
  display: 'flex',
  width: '100%',
  marginRight: '17%'
}

const text = {
  fontFamily: 'Red Hat Display',
  fontWeight: 400,
  fontSize: 14,
  width: "100%",
  color: '#00003F',

}

const text2 = {
  fontFamily: 'Red Hat Display',
  fontWeight: 400,
  fontSize: 14,
  color: '#00003F',
  width: "100%",
  marginLeft: '4%'

}

const text3 = {
  fontFamily: 'Red Hat Display',
  fontWeight: 400,
  fontSize: 14,
  color: '#00003F',
  width: "100%",
  marginRight: '60%'

}

const textfield = {
  marginTop: 1,
}

const save = {
  fontWeight: 700,
  marginTop: 3,
  width: '100%',
  marginRight: "70%",
  height: 60,
  borderRadius: '3px',
  backgroundColor: '#34D48F',
  fontSize: '16px',
  fontFamily: 'Red Hat Display',
  color: '#FFFFFF',
  fontStyle: 'normal',
  lineHeight: '22px',

}
const select ={
  height:57,
  marginTop:9,
  borderRadius:6,
  width:'100%'
}

const Employee = () => {

  let navigate = useNavigate();

  const navigateNext = () => {
    navigate('/employeeTwo');
  }
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [experience, setexperience] = useState(" ")
  const [email, setemail] = useState("");
  const [zipcode, setzipcode] = useState(" ")
  const [contact, setcontact] = useState("");
  const [addressOne, setaddressOne] = useState("");
  const [addressTwo, setaddressTwo] = useState("");

  const handleChangeFirstName = (event) => {
    const result = event.target.value.replace(/[^a-zA-Z]/gi, '');
    setfirstname(result);
  };

  const handleChangeLastName = (event) => {
    const result = event.target.value.replace(/[^a-zA-Z]/gi, '');
    setlastname(result);
  };

  const handleChangeExperience = (event) => {
    const result = event.target.value.replace(/[^0-9]/gi, '');
    setexperience(result);
  };

  const handleemail = (event) => {
    const result = event.target.value.replace(/[^a-zA-Z0-9@.]/gi, '');
    setemail(result);
  };

  const handlezipcode = event => {
    const result = event.target.value.replace(/[^0-9]/gi, '');
    setzipcode(result);
  };


  const handlecontact = event => {
    const result = event.target.value.replace(/[^0-9]/gi, '');
    setcontact(result);
  };

  const handleaddressOne = event => {
    const result = event.target.value.replace(/[^a-zA-Z0-9]/gi, '');
    setaddressOne(result);
  };

  const handleaddressTwo = event => {
    const result = event.target.value.replace(/[^a-zA-Z0-9]/gi, '');
    setaddressTwo(result);
  };




  return (
    < >

      <Card style={{marginTop:'2%'}} >
        <CardContent  >

       

          <Box >
          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>

              <FormControl sx={text} >
                First name*
                <TextField id='firstname' name='firstname' type="text" value={firstname} onChange={handleChangeFirstName} inputProps={{ sx: { color: "#6c757d", border: '0.5px solid black', borderRadius: '4px' }, maxLength: 20 }} sx={textfield} placeholder='Enter First Name'></TextField>

              </FormControl>

              <FormControl sx={text2}>
                Last name*
                <TextField id='lastname' name='lastname' type="text" value={lastname} onChange={handleChangeLastName} inputProps={{ sx: { color: "#6c757d", border: '0.5px solid black', borderRadius: '4px' }, maxLength: 15 }} sx={textfield} placeholder='Enter Last Name'></TextField>
              </FormControl>


            </Grid>
          </Grid>

          <Grid container sx={gridContainer}  >
            <FormControl sx={text3}>
              Email Id*
              <TextField id='email' name='email' value={email} onChange={handleemail} inputProps={{ sx: { color: "#6c757d", border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} placeholder=' Email ID'></TextField>
            </FormControl>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>

              <FormControl sx={text}>
                Date of Birth

                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    type="date"
                    defaultValue="DD-MM-YYYY"
                    sx={textfield}
                    inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px' } }}
                    
                  />
                </Stack>


              </FormControl>

              <FormControl sx={text2}>
                Date of Joining

                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    type="date"
                    defaultValue="DD-MM-YYYY"
                    sx={textfield}
                    inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px' } }}
                  />
                </Stack>
              </FormControl>

            </Grid>
          </Grid>

          <Grid container sx={gridContainer}  >
            <FormControl sx={text3}>
              Education

              <TextField inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} >


              </TextField>
            </FormControl>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>

              <FormControl sx={text}>
                Categories

                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">


                </TextField>
              </FormControl>

              <FormControl sx={text2}>
                Skills

                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >
                  </MenuItem>

                </TextField>
              </FormControl>

            </Grid>
          </Grid>



          <Grid container sx={gridContainer}   >
            <FormControl sx={text3}>
              Certificate

              <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                <MenuItem >
                </MenuItem>

              </TextField>
            </FormControl>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>

              <FormControl sx={text}>
                Total Experience

                <TextField id='experience' name='experience' value={experience} onChange={handleChangeExperience} InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' }, maxLength: 2 }} sx={textfield} />


              </FormControl>

              <FormControl sx={text2}>
                Work Type

                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >Half Time</MenuItem>
                  <MenuItem >Full Time</MenuItem>
                </TextField>
              </FormControl>

            </Grid>
          </Grid>



          <Grid container sx={gridContainer}   >
            <FormControl sx={text3}>
              Designation 

              <TextField sx={textfield} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' }, maxLength: 15 }} >
                <MenuItem >
                </MenuItem>
              </TextField>
            </FormControl>
          </Grid>

       

          <Grid container sx={gridContainer} >
            <Grid >
              <FormControl style={{ fontFamily: 'Red Hat Display', fontWeight: 400, fontSize: '14px', lineHeight: '22px', color: '#00003F', opacity: '0.5', marginBottom: 10 }}>
                PERSONMAL INFORMATION
              </FormControl>
            </Grid>
          </Grid>


          <Grid container sx={gridContainer}>
            <Grid sx={subContainer}>

              <FormControl sx={text}>
                Address 1
                <TextField id='addressOne' name='addressOne' value={addressOne} onChange={handleaddressOne} inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px', height: 15 }, maxLength: 50 }} sx={textfield}></TextField>
              </FormControl>

              <FormControl sx={text2}>
                Address 2
                <TextField id='addressTwo' name='addressTwo' value={addressTwo} onChange={handleaddressTwo} inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px', height: 15 }, maxLength: 50 }} sx={textfield}></TextField>
              </FormControl>

            </Grid>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>
               <FormControl sx={text}>
                Country*
                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >
                  </MenuItem>

                </TextField>
              
              
              </FormControl> 





              <FormControl sx={text2}>
                State*
                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >
                  </MenuItem>

                </TextField>

              </FormControl>

            </Grid>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>
              <FormControl sx={text}>
                City*
                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >
                  </MenuItem>

                </TextField>
               
              </FormControl>

              <FormControl sx={text2}>
                Zipcode
                <TextField id='zipcode' name='zipcode' value={zipcode} onChange={handlezipcode} inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield}></TextField>
              </FormControl>



            </Grid>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>

              <FormControl sx={text}>
                Marital Status
                <TextField InputLabelProps={{ sx: { color: '#adb5bd' } }} inputProps={{ sx: { border: '0.5px solid black', borderRadius: '4px' } }} sx={textfield} select label="Select">
                  <MenuItem >Single</MenuItem>
                  <MenuItem >Married</MenuItem>

                </TextField>

              </FormControl>


              <FormControl sx={text2}>
                 Contact No.*
                <TextField id='contact' name='contact' value={contact} onChange={handlecontact} inputProps={{ sx: { color: "#adb5bd", border: '0.5px solid black', borderRadius: '4px', } }} sx={textfield}></TextField>


              </FormControl>

            </Grid>
          </Grid>


          <Grid container sx={gridContainer}   >
            <Button sx={save}>
              Save
            </Button>

          </Grid>


          </Box>


        </CardContent>
      </Card>
    </>
  )
}

export default Employee;