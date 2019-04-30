import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "David Sawn",
        email: "David@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Jonathan Helmo",
        email: "Helmo@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: 3,
        name: "Syveren Müller",
        email: "müller@gmail.com",
        phone: "333-333-333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-primary">Contact List</span>
        </h1>
        {contacts.map(contact => (
          <ContactInfo key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
