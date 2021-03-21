//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import AllCustomers from "./Components/AllCustomers";
import AddCustomer from "./Components/AddCustomer";


function App() {
  const [customers, setCustomers] = useState([
    { id: "1", name: "Shruthi", location: "Australia" },
    { id: "2", name: "Shraddha", location: "India" },
    { id: "3", name: "Medha", location: "United States" },
  ]);

  const [count, setCount] = useState(3);
  const [showAdd, setShowAdd] = useState(false);

  const onAdd = (customer) => {
    const id = count + 1;
    setCount(id);
    const newCustomer = { id, ...customer };
    setCustomers([...customers, newCustomer]);
  };

  const onDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id != id));
  };

  const [custName,setCustName] =useState("default");
  const [custLocation,setCustLocation] =useState("default");
  const [showEdit, setShowEdit] = useState(false);

  const onEdit = (id) => {
    setShowEdit(!showEdit);
    const row=customers.filter((customer) => customer.id === id);
    console.log("you are editing", row)
};

  return (
    <div className="container">
      <Header title="Customer Information" />
      

      {customers.length > 0 ? (
        <AllCustomers
          customers={customers}
          onDelete={onDelete}
          onEdit={onEdit}
          showEdit={showEdit}
          onAdd={() => setShowAdd(!showAdd)}
          showAdd={showAdd}
        />
        
      ) : (
        "No records to delete. Please add the Customers"
      )}
      
      {showAdd && <AddCustomer onAdd={onAdd} />}
    </div>
  );
}

export default App;
