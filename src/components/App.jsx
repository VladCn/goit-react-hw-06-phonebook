import React from "react";
import { FilterInput } from "./FilterInput";
import { Phonebook } from "./Phonebook";
import { ContactRender } from "./ContactRender";

export function App() {

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
        <Phonebook />
        <FilterInput />
        <ContactRender />
      </div>
    )

}
