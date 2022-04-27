import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { add } from "redux/contactSlice";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  padding: 10px;
`;

const Name = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: normal;
`;
const Input = styled.input`
  margin-bottom: 15px;
`;
const Button = styled.button`
  width: 100px;
`;

export function Phonebook(){
  const dispatch = useDispatch()
  const persistedContacts = useSelector(state => state.contacts.value)
  const[name, setName] = useState("")
  const[number, setNumber] = useState("")

  const handleChange = (event) => {
    if(event.currentTarget.name === "name"){
      setName(event.currentTarget.value)
    } else
    setNumber(event.currentTarget.value)
  };

  const handleSaveContacts = ({ name, number }) => {
    const res = persistedContacts.map((item) => {
      return item.name;
    });

    if (res.includes(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(add({name, number, id: shortid.generate()}))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveContacts({name, number});
    setName("")
    setNumber("")
  };

    return (
      <Form onSubmit={handleSubmit}>
        <label>
          <Name>Name</Name>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <Name>Number</Name>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
}

Phonebook.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangePhone: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
