import React from "react";
import Contacts from "../hw-2/contacts/Contacts";
import { Provider } from "react-redux";
import { store } from "../hw-2/contacts/redux/store.js";

function ContactsPage() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}

export default ContactsPage;
