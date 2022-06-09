import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataPrueba from './Datos.json'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rowsPrestamo = DataPrueba.prestamos;
console.log(rowsPrestamo)

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{width: '50%'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Cliente</StyledTableCell>
            <StyledTableCell align="right">Monto</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsPrestamo.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>{row.Cliente}</StyledTableCell>
              <StyledTableCell align="right">{row.Monto}</StyledTableCell>
              <StyledTableCell align="right">{row.Estado}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
