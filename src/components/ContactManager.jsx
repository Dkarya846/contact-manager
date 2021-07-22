import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default function ContactManager() {
  const initialContacts = [
    { name: "Tony Shark", number: 9871157865 },
    { name: "Barry Allen", number: 9871157865 },
    { name: "Bruce Wayne", number: 9871157865 },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  function deletePerson(contact) {
    const index = contacts.indexOf(contact);
    setContacts(contacts.filter((contact, i) => i !== index));
  }

  function addPerson(contact) {
    setContacts([...contacts, contact]);
  }

  return (
    <div className="main">
      <div>
        <h2 style={{ textAlign: "center", padding: "10px 0" }}>
          Contact Manager
        </h2>
        <ContactForm handleSubmit={addPerson} />
        <ContactList data={contacts} handleDelete={deletePerson} />
      </div>
    </div>
  );
}
