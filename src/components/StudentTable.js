import React,{ useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { StudentContext } from './StudentContext';

function Student() {
const [students] = useContext(StudentContext)
  return (
    <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.course}</TableCell>
                  <TableCell align="right">{row.batch}</TableCell>
                  <TableCell align="right"><Link to={`/edit/${row.id}`}>Edit</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
         </Table>
        </TableContainer>
    </div>
  )
}

export default Student;