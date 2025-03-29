import { createSlice } from "@reduxjs/toolkit";
const localContacts = JSON.parse(localStorage.getItem("contacts"));
export const contactsSlice = createSlice({
  name: "contactsList",
  initialState: {
    contacts: localContacts || [],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact?.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContacts, updateFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;
