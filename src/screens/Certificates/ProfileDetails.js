import { Avatar, Box, Divider, Drawer, Stack, Table, TableBody, TableCell, TableRow, ThemeProvider, Typography, createTheme } from "@mui/material";

import { Close } from "@mui/icons-material";
import React from "react";

const ProfileDetails = ({ toOpenDrawer, toCloseDrawer, details }) => {
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 16,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 100,
      },
      caption: {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Drawer anchor="right" open={toOpenDrawer} onClose={toCloseDrawer}>
        <Box minWidth="700px" width="100%" role="presentation">
            <Close
              alignself="end"
              sx={{ position: "absolute", top: "13px", right: "15px", cursor: "pointer" }}
              onClick={toCloseDrawer}
            />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2 }}
            mt={4}
            mb={2}
            pr={2}
            pl={4}
          >
            <Avatar
              sx={{ width: "75px", height: "75px" }}
              src="https://spng.subpng.com/20190123/ktl/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c23034f9.2474238715482771861975.jpg"
            />
            <Stack
                direction="column"
                spacing={2}
              >
              <Typography variant="h6" flexDirection="column">
                Effie Thompson
                <Typography variant="subtitle1">
                  Designer
                  <Typography variant="caption" ml={2}>
                    FullTime
                  </Typography>
                </Typography>
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{margin: '0 !important' }}
              >
                <Typography variant='subtitle2'>+91 0000000000</Typography>
                <Typography variant='subtitle2'>DOB: 12-Dec-1990</Typography>
                <Typography variant='subtitle2'>effie@gmail.com</Typography>
              </Stack>
            </Stack>
          </Stack>
            
          <Divider />
          <Table ml={5}>
            <TableBody >
              <TableRow >
                <TableCell sx={{border: 0,paddingLeft:"40px", width: '20%'}}>Joining Date:</TableCell>
                <TableCell sx={{border: 0, paddingLeft:"20px"}}>22-Aug-2022</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default ProfileDetails;
