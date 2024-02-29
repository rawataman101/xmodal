import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const validatePhone = (number) => {
  const phoneRegex = /^\+?(\d{10})$/;
  if (!phoneRegex.test(number)) {
    return false;
  }
  return true;
};
const validateDateOfBirth = (birthDate) => {
  let birthDateObject = null;
  try {
    birthDateObject = new Date(birthDate);
    if (isNaN(birthDateObject.getTime())) {
      return false;
    }
  } catch (error) {
    return false;
  }

  const today = new Date();
  return birthDateObject < today;
};
function App() {
  const [phone, setPhone] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    if (!validateDateOfBirth(birthDate)) {
      alert("invlaid");
    }
  };
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <Button variant="contained" onClick={handleOpen}>
        Open Form
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Fill Detials</h2>
            <label htmlFor="username">Username:</label>
            <br />
            <input required type="text" id="username" />
            <br />
            <label required htmlFor="email">
              Email Address:
            </label>
            <br />
            <input required type="email" id="email" />
            <br />
            <label required htmlFor="phone">
              Phone Number
            </label>
            <br />
            <input
              required
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="birthdate">Date of Birth:</label>
            <br />
            <input
              required
              type="date"
              id="birthdate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <br />
            <div>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
