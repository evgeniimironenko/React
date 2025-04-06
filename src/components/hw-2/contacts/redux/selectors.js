export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = (state) => {
  const normalizedFilter = state.contacts.filter.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact?.name?.toLowerCase().includes(normalizedFilter)
  );
};

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.contacts.filter;
