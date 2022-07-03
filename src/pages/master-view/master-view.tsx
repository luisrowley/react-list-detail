import React from 'react';
import './master-view.css';
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { Link } from 'react-router-dom';

const MasterView: React.FC<any> = (props: any) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.charData.length) : 0;

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

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? props.charData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : props.charData
            ).map((row: any) => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link
                        style={{ display: "block", textDecoration: "none" }}
                        to={`/details/${row.id}`}
                        key={row.id}
                      >
                        <Avatar alt="Remy Sharp" src={row.thumbnail} />
                        {row.name}
                      </Link>
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
              <TableRow style={{ height: 53 * emptyRows }} key="0">
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={props.charData.length}
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
  );
}

export default MasterView;