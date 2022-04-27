import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { remove } from "redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

export function ContactRender() {
  const dispatch = useDispatch();
  const persistedFilter = useSelector(state => state.contacts.filter);
  const persistedContacts = useSelector(state => state.contacts.value)
  const [state, setState] = useState([])

  const handleDelete = (event) => {
    dispatch(remove(event.target.value))
  };

  useEffect(() => {
    if (persistedFilter) {
      const filterResult = persistedContacts?.filter((item) => {
        return item?.name?.includes(persistedFilter);
      })
      setState(filterResult)
    } else {
      setState(persistedContacts)
    }
  },[persistedContacts, persistedFilter])

  return (
    <>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            {item.name}: {item.number}{" "}
            <button onClick={handleDelete} value={item.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactRender.propTypes = {
  contacts: PropTypes.array,
};
