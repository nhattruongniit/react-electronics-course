import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import Rating from "@mui/material/Rating";

function createData(image, title, brand, rating, price) {
  return { image, title, brand, rating, price };
}

const rows = [
  createData(
    "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    "MacBook Pro",
    "Apple",
    5,
    1749
  ),
  createData(
    "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "Samsung Galaxy Book",
    "Samsung",
    4,
    1749
  ),
];

// API: https://dummyjson.com/products/category/laptops

function ProductLaptop() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <img src={row.image} width={50} alt="" />
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="left">
                  <Rating name="read-only" defaultValue={row.rating} readOnly />
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="center">
                  <Button variant="contained">Checkout</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default ProductLaptop;
