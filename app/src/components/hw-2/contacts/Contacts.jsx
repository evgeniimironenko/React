import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

class Contacts extends Component {
  state = {
    contacts: [],
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

    const isNameExist = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() == name.toLowerCase()
    );

    if (isNameExist) {
      alert("Name is already exist");
      form.reset();
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      }));
      form.reset();
    }
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

  handleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      this.setState({
        contacts: localContacts,
      });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

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
        <ContactList
          filteredContacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </section>
    );
  }
}

export default Contacts;
