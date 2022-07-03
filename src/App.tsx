import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchDataFrom, normalizeJSON } from './data/provider';
import { DEFAULT_ENTRY_NAME, endpoints } from './constants/endpoints';
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

const App: React.FC = () => {

  const [charData, setCharData] = useState([{}]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - charData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetchDataFrom(endpoints.CHARS_URL)
     .then(data => setCharData(
       normalizeJSON(data[DEFAULT_ENTRY_NAME]))
       )
    }, [])

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? charData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : charData
            ).map((row: any) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Avatar alt="Remy Sharp" src={row.thumbnail} />
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.weight}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.age}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={charData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
