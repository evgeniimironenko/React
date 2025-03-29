import React from "react";
import Contacts from "../hw-2/contacts/Contacts";
import { Provider } from "react-redux";
import store from "../hw-2/contacts/features/store.js";

function ContactsPage() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}

export default ContactsPage;
