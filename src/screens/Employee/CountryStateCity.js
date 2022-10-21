import React, { useState ,useEffect} from 'react';
import { Card, CardContent, Button, Grid, TextField, MenuItem, FormControl, Stack } from '@mui/material'
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






  const [data, setData] = useState([]);
  const [getcountry, setgetcountry] = useState();
  const [getstate, setgetstate] = useState([]);
  const [selectedState, setselectedState] = useState();
  const [cities, setcities] = useState([]);

  
  useEffect(() => {
    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  const country = [...new Set(data.map(item => item.country))]
  country.sort();

  const handleCountry = (e  ) => {
    console.log("event is ------------>", e);
    let states = data.filter(state => state.country === e.target.value);
    states = [...new Set(states.map(item => item.subcountry))]
    states.sort();
    setgetstate(states);
  }

  const handleState = (e) => {
    let cities = data.filter(city => city.subcountry === e.target.value);
    console.log("citiesss areee -->>>>>>>",cities);
    setcities(cities);

  }




  return (
    < >

      <Card  >
        <CardContent  >

   

   









          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>
               <FormControl sx={text}>
                Country*

              
                <select  style={select} onChange={(e) => handleCountry(e)}>
                <option >Select</option>
              {
                country.map(items => <option key={items} value={getcountry} >{items}</option>
                )}
            </select>
              </FormControl> 





              <FormControl sx={text2}>
                State*

                <select style={select} onChange={(e) => handleState(e)}>
                <option >Select</option>
              {
                getstate.map(items => <option key={items} value={selectedState} >{items}</option>
                )}
            </select>
              </FormControl>

            </Grid>
          </Grid>

          <Grid container sx={gridContainer} >
            <Grid sx={subContainer}>
              <FormControl sx={text3}>
                City*

                <select  style={select} >
                <option >Select</option>
              {
                cities.map(items => <option  key={items.name} >{items.name}</option>
                )}
            </select>
              </FormControl>



            </Grid>
          </Grid>



          <Grid container sx={gridContainer}   >
            <Button sx={save}>
              Save
            </Button>

          </Grid>




        </CardContent>
      </Card>
    </>
  )
}

export default Employee;