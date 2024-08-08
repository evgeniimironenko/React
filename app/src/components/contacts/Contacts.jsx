import { nanoid } from "nanoid";
import css from "./Contacts.module.css";
import { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

class Contacts extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  inputId = nanoid();
  numberId = nanoid();

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const number = form.elements.userNumber.value;
    const newContact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
    form.reset();
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <section>
        <h2>Phonebook</h2>
        <ContactForm
          onSubmit={this.handleSubmit}
          inputId={this.inputId}
          numberId={this.numberId}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList filteredContacts={filteredContacts} />
      </section>
    );
  }
}

export default Contacts;
