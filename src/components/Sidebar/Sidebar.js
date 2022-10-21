import "../../App.css"

import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"

import { Link } from "react-router-dom";
import Listitem from './Listitem'
import { Notifications } from '@mui/icons-material';
import { SidebarData } from './SidebarData'

// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   avatar: {
//       width: 50,
//       height: 50
//   },
//   typo: {
//       marginTop: 3,
//       marginBottom: 1
//   }
//   })
const avatarStyle = {
  width: '2.188rem',
  height: '2.188rem'
}

const Sidebar = () => {
  // const classes = useStyles()
  return (
    <Box  style={{position:'sticky',top:0}} className="Sidebar">
        <Typography variant="h4" color="#34D48F" textAlign="center" mt={3} mb={1}>DX</Typography>
        <List>
          { SidebarData.map((item, index)=><Listitem item={item} key={index}/>)}
        </List>

        <List id="BottomMenu">
          <ListItem disablePadding sx={{flexDirection:'column'}}>
            <Link to="/notifications">
              <ListItemIcon sx={{justifyContent:'center', alignItems:'center'}}>
                <Notifications sx={{color: '#9C9CC8'}} fontSize='large'/>
              </ListItemIcon>
            </Link>
          </ListItem>
          <ListItem disablePadding sx={{flexDirection:'column', marginTop:3}}>
            <ListItemButton >
              <Avatar
                    sx={avatarStyle}
                    src="https://spng.subpng.com/20190123/ktl/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c23034f9.2474238715482771861975.jpg"
                />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar