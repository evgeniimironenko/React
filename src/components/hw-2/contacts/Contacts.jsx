import { nanoid } from "nanoid";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContacts,
  updateFilter,
} from "./features/contactsSlice";

function Contacts() {
  const contactsList = useSelector((state) => state.constactsList.contacts);
  const filterString = useSelector((state) => state.constactsList.filter);
  const dispatch = useDispatch();

  const inputId = nanoid();
  const numberId = nanoid();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const number = form.elements.userNumber.value;
    const newContact = { id: nanoid(), name, number };

    const isNameExist = contactsList.some(
      (contact) => contact?.name?.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert("Name is already exist");
      form.reset();
    } else {
      localStorage.setItem("contacts", JSON.stringify(contactsList));
      dispatch(addContact(newContact));
      form.reset();
    }
  }

  function handleChange(e) {
    dispatch(updateFilter(e.target.value));
  }

  function getFilteredContacts() {
    const normalizedFilter = filterString.toLowerCase();
    return contactsList.filter((contact) =>
      contact?.name?.toLowerCase().includes(normalizedFilter)
    );
  }

  function handleDelete(contactId) {
    dispatch(deleteContacts(contactId));
  }

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmit}
        inputId={inputId}
        numberId={numberId}
      />
      {contactsList.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter filter={filterString} handleChange={handleChange} />
          <ContactList
            filteredContacts={getFilteredContacts()}
            handleDelete={handleDelete}
          />
        </>
      ) : null}
    </section>
  );
}

export default Contacts;
