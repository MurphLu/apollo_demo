import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useBooks } from '../../hooks/useBooks';


export default function BasicTable() {
  const { loading, data, error } = useBooks();
  if(loading) return <span> loading .....</span>
  if(error) return <span> error ..... </span>
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">subName</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align="right">corver</TableCell>
            <TableCell align="right">author</TableCell>
            <TableCell align="right">tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.books.map((book) => (
            <TableRow
              key={book.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.name}
              </TableCell>
              <TableCell align="right">{book.subName}</TableCell>
              <TableCell align="right">{book.description}</TableCell>
              <TableCell align="right">{book.corver}</TableCell>
              <TableCell align="right">{book.author && book.author.name}</TableCell>
              <TableCell align="right">aaa</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
