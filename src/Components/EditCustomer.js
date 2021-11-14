import { useState } from "react";

const EditCustomer = ({ customer, onSave }) => {
  const [id, setId] = useState(customer.id);
  const [name, setName] = useState(customer.name);
  const [location, setLocation] = useState(customer.location);
  const [email, setEmail] = useState(customer.email);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!email.match(/.+@.+.com/)) {
      alert("Please add a valid email (Ex: abc@xyz.com )");
      return;
    }
    onSave({ id, name, location, email });
    setId("");
    setName("");
    setLocation("");
    setEmail("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Add Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="text"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <input type="submit" value="Confirm Changes" className="btn btn-block" />
    </form>
  );
};

export default EditCustomer;
