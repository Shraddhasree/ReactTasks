//import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import AllCustomers from "./Components/AllCustomers";
import AddCustomer from "./Components/AddCustomer";
import EditCustomer from "./Components/EditCustomer";

function App() {
  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
    };
    getCustomers();
  });

  //fetch all customers
  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:5000/customers");
    const data = await res.json();
    return data;
  };
  //fetch single customer
  const fetchCustomer = async (id) => {
    const res = await fetch(`http://localhost:5000/customers/${id}`);
    const data = await res.json();
    return data;
  };

  const [customers, setCustomers] = useState([
    // {
    //   "id": "1",
    //   "name": "Aditya",
    //   "location": "Australia",
    //   "email": "aditya@react.com"
    // },
    // {
    //   "id": "2",
    //   "name": "Shraddha",
    //   "location": "India",
    //   "email": "shraddha@react.com"
    // },
    // {
    //   "id": "3",
    //   "name": "Medha",
    //   "location": "United States",
    //   "email": "medha@react.com"
    // }
  ]);

  //const [index, setIndex] = useState(customers.length);
  const [showAdd, setShowAdd] = useState(false);

  const onAdd = async (customer) => {
    const res = await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(customer),
    });
    const data = res.json();
    setCustomers([...customers, data]);
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/customers/${id}`, {
      method: "DELETE",
    });
    setCustomers(customers.filter((item) => item.id !== id));
  };

  const [showEdit, setShowEdit] = useState(false);
  const [customer, setCustomer] = useState([
    { id: "", name: "", location: "", email: "" },
  ]);

  const onEdit = async (key) => {
    const data = await fetchCustomer(key);

    setCustomer(data);
    setShowEdit(!showEdit);
    console.log("you are editing", data);
  };

  const onSave = async (cust) => {
    const rowToBeUpdated = {
      ...cust,
      name: cust.name,
      location: cust.location,
      email: cust.email,
    };
    console.log("you are saving", rowToBeUpdated);
    const res = await fetch(`http://localhost:5000/customers/${cust.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(rowToBeUpdated),
    });
    const data = res.json();
    //console.log(cust);
    //     const updatedList = customers.map(item =>
    //       {
    //         if (item.id === cust.id){
    //           return {...cust};
    //         }
    //         return item;
    //       });
    //  console.log("updated as",updatedList)
    setCustomers(customers.map((item) => (item.id === cust.id ? data : item)));
    setShowEdit(!showEdit);
  };

  return (
    <div className="container">
      <Header title="Customer Information" />
      {showAdd && <AddCustomer onAdd={onAdd} />}
      {showEdit && <EditCustomer customer={customer} onSave={onSave} />}
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
        "No records to show. Please add the Customers"
      )}
    </div>
  );
}

export default App;
