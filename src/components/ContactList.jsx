import React from 'react';
export default function ContactList(props) {
  const arr = props.data;
  const listItems = arr.map((contact, index) => (
    <li className="contact" key={index}>
      <span>{contact.name} </span>{' '}
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {contact.number}{' '}
        <span
          onClick={() => props.handleDelete(contact)}
          className="delete-button"
        >
          x
        </span>
      </span>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
