import React, { useState } from "react";
import { setFilter } from "redux/contactSlice";
import { useDispatch } from "react-redux";

export function FilterInput() {
  const dispatch = useDispatch()
  const [state, setState] = useState("");

  const handleFilterContact = (event) => {
    dispatch(setFilter(event.target.value))
    setState(event.target.value)
  };

  return (
    <>
      <h2>Contacts</h2>

      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="name"
          required
          value={state}
          onChange={handleFilterContact}
        />
      </label>
    </>
  );
}
