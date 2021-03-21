import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AddCustomer from "./AddCustomer";


const AllCustomers = ({
  customers,
  onAdd,
  onDelete,
  showAdd,
  onEdit,
  showEdit,
}) => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    tableHead: {
      minWidth: 650,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <TableContainer align="left" component={Paper}>
        <Table
          stickyheader
          size="small"
          className={classes.tableHead}
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <b>CustomerID</b>
              </TableCell>
              <TableCell align="left">
                <b>CustomerName</b>
              </TableCell>
              <TableCell align="left">
                <b>CustomerLocation</b>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={showAdd ? "secondary" : "primary"}
                  size="large"
                  title={
                    showAdd
                      ? "Click to close the form"
                      : "Click to add a new customer"
                  }
                  onClick={onAdd}
                >
                  {showAdd ? "Close" : "Add"}
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell component="th" scope="row" align="left">
                  {customer.id}
                </TableCell>
                <TableCell align="left">{customer.name}</TableCell>
                <TableCell align="left">{customer.location}</TableCell>
                <TableCell>
                  <Button
                    color="default"
                    text="Edit"
                    size="small"
                    onClick={() => onEdit(customer.id)}
                  >
                    <EditIcon />
                  </Button>
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    size="small"
                    onClick={() => onDelete(customer.id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllCustomers;
