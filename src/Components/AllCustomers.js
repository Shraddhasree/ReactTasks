import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import EachCustomer from "./EachCustomer";
import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import ButtonGroup from '@material-ui/core/ButtonGroup';

const AllCustomers = ({
  customers,
  onAdd,
  onDelete,
  showAdd,
  //onEdit,
  //showEdit,
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

  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <TableContainer align="left" component={Paper}>
        <Table
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
              <TableCell align="left">
                <b>emailAddress</b>
              </TableCell>
              {/* <TableCell align="left">
                <b>Gender</b>
              </TableCell> */}
              <TableCell>
              <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button
                  variant="contained"
                  color={showAdd ? "secondary" : "primary"}
                  size="small"
                  title={
                    showAdd
                      ? "Click to close the form"
                      : "Click to add a new customer"
                  }
                  onClick={onAdd}
                >
                  {showAdd ? "Close" : "Add"}
                </Button>
                
              <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={() => setShowEdit(!showEdit)}
          startIcon = {showEdit ? <CheckIcon /> : <EditIcon />}
        >
          {showEdit ? "Confirm" : "Edit"}
        </Button>
        </ButtonGroup>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <EachCustomer
                key={customer.id}
                customer={customer}
                showEdit={showEdit}
                //onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllCustomers;
