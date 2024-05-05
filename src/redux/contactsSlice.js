import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addMatcher(isPending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Selectors

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (!nameFilter) {
      return contacts;
    }
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        contact.number.toString().includes(nameFilter.toString())
    );
  }
);

export const contactsReducer = contactsSlice.reducer;
