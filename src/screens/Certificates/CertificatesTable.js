import * as React from 'react';

import { Avatar, Box, Menu, MenuItem, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material"

import Certificates from './data/certificate.json'
import { Link } from 'react-router-dom';
import MoreVert from '@mui/icons-material/MoreVert';
import ProfileDetails from './ProfileDetails';
import { UnfoldMore } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(
  order,
  orderBy,
) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'NAME',
  },
  {
    id: 'organization',
    numeric: true,
    disablePadding: false,
    label: 'ISSUING ORGANIZATION',
  },
  {
    id: 'skill',
    numeric: true,
    disablePadding: false,
    label: 'SKILL',
  },
  {
    id: 'active',
    numeric: true,
    disablePadding: false,
    label: 'ACTIVE',
  }
];


function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property) => (event) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='none'></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={UnfoldMore}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function CertificateTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [certificateDetail, setCertificateDetail] = React.useState(null)
  const [anchorE1, setAnchorE1] = React.useState(null)
  const open = Boolean(anchorE1);

  const handleRequestSort = (
    event,
    property,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = () => {
    setIsDrawerOpen(true)
  };

  const handleAction = (event) => {
    console.log('event', event)
    setAnchorE1(event.currentTarget)
  }


  const handleActionClose = () => {
    setAnchorE1(null);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Certificates.length) : 0;
  let id = 5
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, overflow:'hidden' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table
            stickyHeader 
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={Certificates.length}
            />
            <TableBody>
              {stableSort(Certificates, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  return (
                    <TableRow
                      // hover
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell sx={{padding:'0 0 0 2.5rem'}}>
                        <Avatar sx={{ width: "2.313rem", height: "2.313rem" }} src={row.avatar}/>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={row.id}
                        scope="row"
                        onClick={handleClick}
                        sx={{cursor: "pointer"}}

                      >
                        {row.name}
                      </TableCell>
                      <TableCell>{row.organization}</TableCell>
                      <TableCell>{row.skill}</TableCell>
                      <TableCell>
                        <Switch checked={ row.active } sx={{verticalAlign:'top'}}  />
                        <MoreVert fontSize='large' sx={{ color: "#34D48F", marginLeft:'25px', cursor: "pointer"}} id='action-icon' onClick={handleAction} 
                        aria-controls={open ? 'action-menu' : undefined} aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}/>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={Certificates.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ProfileDetails toOpenDrawer={isDrawerOpen} toCloseDrawer={()=>setIsDrawerOpen(false)} details={certificateDetail}/>
      <Menu id="action-menu" anchorEl={anchorE1} open={open} MenuListProps={{
          'aria-labelledby': 'action-icon',
        }} onClose={handleActionClose} 
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}>
        <Link style={{ textDecoration: 'none', color:'#454545' }} to={`edit/${id}`}><MenuItem onClick={handleActionClose}>Edit Certificate</MenuItem></Link>
        <MenuItem onClick={handleActionClose}>Delete Certificate</MenuItem>
      </Menu>
    </Box>
  );
}
