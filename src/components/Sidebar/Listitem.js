import { ListItem, ListItemIcon, ListItemText } from "@mui/material"

import { Link } from "react-router-dom"

const Listitem = ({item}) => {
  return (
    <ListItem disablePadding sx={{flexDirection:'column', marginBottom:3}}>
      <Link to={item.link}>
        <ListItemIcon sx={{justifyContent:'center', alignItems:'center'}}>
          {item.icon}
        </ListItemIcon>
      </Link>
      <ListItemText 
          primary={item.title} 
          sx={{color:"white", marginTop:'0'}} 
          primaryTypographyProps={{fontSize: '0.75rem'}}/>
    </ListItem>
  )
}

export default Listitem