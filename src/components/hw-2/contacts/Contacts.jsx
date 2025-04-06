import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "./redux/selectors";
import { fetchContacts } from "./redux/operations";
import { useEffect } from "react";

function Contacts() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const filteredItems = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      {error && <p>{error}</p>}
      {items.length > 0 ? (
        <>
          <Filter />
          <h2>Contacts</h2>
          {filteredItems.length === 0 ? (
            <p>No contacts found</p>
          ) : (
            <ContactList items={filteredItems} />
          )}
        </>
      ) : null}
      {isLoading && !error && <p>Loading...</p>}
    </section>
  );
}

export default Contacts;
