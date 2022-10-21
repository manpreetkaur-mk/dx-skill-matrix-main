import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material"

import React from 'react'
import { Search } from '@mui/icons-material';
import { StyledToolbar } from "../../style";
import { styled } from "@material-ui/styles";

const InternalStyledToolbar = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
});

const btnStyle = {
  width:"13.75rem",
  padding:'0.5rem', 
  backgroundColor: "#34D48F"
}

const Header = ({ title, searchBar=false, buttonTitle=false }) => {
  return (
    <StyledToolbar>
        <Typography variant="h5" color="#00003F">
            {title}
        </Typography>
        <InternalStyledToolbar>
        { searchBar && 
        <TextField
          variant="outlined"
          sx={{width:"18.75rem"}}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search/>
              </InputAdornment>
            ),
          }}
        />  }
        { buttonTitle &&
        <Button variant="contained" sx={btnStyle}>{buttonTitle}</Button>
         }
        </InternalStyledToolbar>
      </StyledToolbar>
  )
}

export default Header