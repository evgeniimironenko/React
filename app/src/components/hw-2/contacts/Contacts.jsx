import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const localContacts = JSON.parse(localStorage.getItem("contacts"));
  const inputId = nanoid();
  const numberId = nanoid();

  useEffect(() => {
    if (localContacts) {
      setContacts(localContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const number = form.elements.userNumber.value;
    const newContact = { id: nanoid(), name, number };

    const isNameExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert("Name is already exist");
      form.reset();
    } else {
      setContacts((contacts) => [...contacts, newContact]);
      form.reset();
    }
  }

  function handleChange(e) {
    setFilter(e.target.value);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function handleDelete(contactId) {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  }

  return (
    <section>
      <h2>Phonebook</h2>
      <ContactForm
        onSubmit={handleSubmit}
        inputId={inputId}
        numberId={numberId}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        filteredContacts={getFilteredContacts()}
        handleDelete={handleDelete}
      />
    </section>
  );
}

export default Contacts;
