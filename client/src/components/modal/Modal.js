// import { useSelector, useDispatch } from 'react-redux';

import { useState } from "react";
import "./Modal.css";

const Modal = ({ open, setOpen }) => {
  const [value, setValue] = useState({
    name: "",
    date: ""
  });

//   const [nameInput, setNameInput] = useState('');
//   const [dateInput, setDateInput] = useState('');


//   const nameHandler = (e) => {
// setNameInput(e.target.value);
//   }

//   const dateHandler = (e) => {
//     setDateInput(e.target.value);
//   }

  const handleSubmit = (e) => {
    e.preventDefault();

    setValue
  };
  // const handleClose = () => {
  //   document.body.style.overflowY = "scroll";
  // };

  return (
    <div className={`modal__container ${open === false ? "closeModal" : ""}`}>
      <div
        className={`backdrop ${open === false ? "closeModal" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`modal ${open === false ? "closeModal" : ""}`}>
        <div className="top__modal ">
          <h4>Add New Event</h4>
        </div>
        <div className="bottom__modal ">
          <form noValidate onSubmit={handleSubmit} className="flex">
            <div className="event__name flex">
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Christmas"
                // onChange={nameHandler}
                // value={nameInput}
                id="name"
                title="name"
                required
                type="text"
              />
            </div>
            <div className="event__date flex">
              <label htmlFor="date">Date:</label>
              <input
                placeholder=""
                // value={dateInput}
                // onChange={dateHandler}
                id="date"
                title="date"
                required
                type="date"
              />
            </div>
            <button className="button submit__button">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
