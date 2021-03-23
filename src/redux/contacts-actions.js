import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const createContact = createAction('CREATE_CONTACTS', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

const removeContacts = createAction('REMOVE_CONTACTS');

const changeFilter = createAction('CHANGE_FILTER');

const getFiltredContacts = createAction('GET_FILTRED_CONTACTS');

const actions = {
  createContact,
  removeContacts,
  changeFilter,
  getFiltredContacts,
};

export default actions;
