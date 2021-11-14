import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { FaTimes } from "react-icons/fa";
// import TextField from "@material-ui/core/TextField";
// import CheckIcon from "@material-ui/icons/Check";
// import { useState } from "react";

const EachCustomer = ({ customer, showEdit, onEdit, onDelete }) => {
  // const [custName, setCustName] = useState(customer.name);
  // const [custLocation, setCustLocation] = useState(customer.location);
  // const [custEmail, setCustEmail] = useState(customer.email);

  // const handleChange = (e) => {
  //   const val = e.target.value;
  //   if (val.match(/.+@.+/)) {
  //     setCustEmail(e.target.value);
  //   } else {
  //     alert("please add valid email");
  //   }
  // };
  return (
    <TableRow key={customer.id}>
      {/* <TableCell component="th" scope="row" align="left">
        {customer.id}
      </TableCell> */}
      <TableCell align="left">
        {/* {showEdit ? (
          <TextField
            type="text"
            value={custName}
            onChange={(e) => setCustName(e.target.value)}
          />
        ) : ( */}
        {customer.name}
        {/* )} */}
      </TableCell>
      <TableCell align="left">
        {/* {showEdit ? (
          <TextField
            type="text"
            value={custLocation}
            onChange={(e) => setCustLocation(e.target.value)}
          />
        ) : ( */}
        {customer.location}
        {/* )} */}
      </TableCell>
      <TableCell align="left">
        {/* {showEdit ? (
          <TextField
            type="text"
            value={custEmail}
            onChange={(e) => handleChange(e)}
          />
        ) : ( */}
        {customer.email}
        {/* )} */}
      </TableCell>

      <TableCell>
        <Button color="default" size="small" onClick={() => onEdit(customer.id)}>
          {showEdit ? (
            <FaTimes style={{ color: "red", cursor: "pointer" }} />
          ) : (
            <EditIcon />
          )}
        </Button>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => onDelete(customer.id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default EachCustomer;
