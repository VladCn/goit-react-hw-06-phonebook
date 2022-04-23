import React, { useEffect, useState } from "react";
import { ContactList } from "./ContactList";
import { Phonebook } from "./Phonebook";
import { ContactRender } from "./ContactRender";
import shortid from "shortid";
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from "../Redux/contactSlice";



export function App() {
  const dispatch = useDispatch()
  //используем для вывода информации из стейта
  const persistedContacts = useSelector(state => state.contacts.value)

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")
  const [filteredContacts, setFilteredContacts] = useState([])

useEffect(() => {
  setContacts(persistedContacts);
},[persistedContacts])

  useEffect(() => {
    const filteredContacts = contacts?.filter((item) => {
      return item?.name?.includes(filter);
    });
    setFilteredContacts(filteredContacts)
  },[contacts, filter])

  const handleDelete = (event) => {
    dispatch(remove(event.target.value))
    // setContacts(newContacts)
    // saveToLocalStorage(KEY, newContacts)
  };

  const handleFilterContact = (event) => {
    event.preventDefault();
    setFilter(event.target.value)
  };

  const handleSubmit = ({ name, number }) => {
    //

    const res = contacts.map((item) => {
      return item.name;
    });

    if (res.includes(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(add({name, number, id: shortid.generate()}))
    }

}

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          marginLeft: "50px",
          // fontSize: 40,
          // textTransform: "uppercase",
          color: "#010101",
        }}
      >
        <h2>Phonebook</h2>
        <Phonebook onSubmit={handleSubmit} />

        <ContactList
          onFilterContact={handleFilterContact}
          filter={filter}
        />

        <ContactRender
          contacts={contacts}
          filteredContacts={filteredContacts}
          handleDelete={handleDelete}
        />
      </div>
    )

}
