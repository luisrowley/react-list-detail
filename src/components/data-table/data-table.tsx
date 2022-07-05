import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Avatar, TableFooter, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContextContext } from "../../data/context";
import { Character } from "../../interfaces/character";
import './data-table.css';

const DataTable: React.FC<any> = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { charData } = useContext(GlobalContextContext);
  
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

    return (
        <TableContainer component={Paper} className="table-main">
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell className="t-cell">Character</TableCell>
              <TableCell className="t-cell">Height</TableCell>
              <TableCell className="t-cell">Weight</TableCell>
              <TableCell className="t-cell">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? charData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : charData
            ).map((row: Character) => (
                <TableRow key={row.id}>
                    <TableCell>
                      <Link
                        style={{ display: "block", textDecoration: "none" }}
                        to={`/details/${row.id}`}
                        state={{row}}
                        key={row.id}
                      >
                        <Avatar src={row.thumbnail} />
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {row.height}
                    </TableCell>
                    <TableCell>
                      {row.weight}
                    </TableCell>
                    <TableCell>
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
    );
}

export default DataTable;
function GlobalConfigContext(GlobalConfigContext: any): { charData: any; } {
    throw new Error("Function not implemented.");
}

