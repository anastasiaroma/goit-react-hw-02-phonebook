import { Component } from "react";
import "./App.css";
import { Form } from "./components/Forms/Form";
import { ContactList } from "./components/Contacts/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = ({ name, number }) => {
    if (!this.state.contacts.find((contact) => contact.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  renderContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== e.target.id),
    }));
  };

  render() {
    const { addNewContact, changeFilter, renderContacts, removeContact } = this;
    //console.log(this.state.name, this.state.number);
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={changeFilter} />
        <ContactList
          contacts={renderContacts()}
          removeContact={removeContact}
        />
      </div>
    );
  }
}

export default App;