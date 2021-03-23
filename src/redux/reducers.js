import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contacts = createReducer([], {
  [actions.createContact]: (state, { payload }) => [...state, payload],
  [actions.removeContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.getFiltredContacts]: state =>
    state.filter(contact => contact.name.toLowerCase()),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state = '', action) => action.payload,
});

export default combineReducers({ contacts, filter });
