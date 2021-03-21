import { useState } from "react";

const AddCustomer = ({ onAdd}) => {
  const [name, setName] = useState();
  const [location, setLocation] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    onAdd({ name, location });
    setName("");
    setLocation("");
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
      <input type="submit" value="Save Details" className="btn btn-block" />
    </form>
  );
};

export default AddCustomer;
