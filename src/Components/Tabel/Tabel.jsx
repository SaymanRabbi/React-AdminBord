import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import './Tabel.scss';
const Tabel = ({data}) => {
    return (
       
              <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tabelcell'>Country</TableCell>
            <TableCell className='tabelcell'>Region</TableCell>
            <TableCell className='tabelcell'>Intensity</TableCell>
            <TableCell className='tabelcell'>Likelihood</TableCell>
            <TableCell className='tabelcell'>Relevance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.slice(0,10).map((row,i) => {
            return(
                row.country && <TableRow
                key={i}
              >
                <TableCell className='tabelcell'>
                  {row?.country}
                </TableCell>
                <TableCell  className='tabelcell'>{row?.region}</TableCell>
                <TableCell  className='tabelcell'>{row?.intensity}</TableCell>
                <TableCell  className='tabelcell'>{row?.likelihood}</TableCell>
                <TableCell  className='tabelcell'>{row?.relevance}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Tabel;