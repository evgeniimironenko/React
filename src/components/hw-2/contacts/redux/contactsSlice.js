import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contactsList",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      handleFulfilled(state);
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleError);

    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      handleFulfilled(state);
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleError);

    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      handleFulfilled(state);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(deleteContact.rejected, handleError);
  },
});

export const { updateFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
