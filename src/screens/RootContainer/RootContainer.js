import "../../App.css"

import { Box, Stack } from "@mui/material"

import RoutesContainer from "../../routes/RoutesContainer"
import Sidebar from "../../components/Sidebar/Sidebar"

const RootContainer = () => {
  return (
    <Box  >
      <Stack direction="row" justifyContent="space-between">
        <Sidebar/>
        <Box  className="MainContainer" >
          <RoutesContainer />
        </Box>
      </Stack>
    </Box>
  )
}

export default RootContainer