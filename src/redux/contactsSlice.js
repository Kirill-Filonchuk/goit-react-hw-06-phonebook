// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import initialContacts from '../data/start-data';
// console.log(initialContacts);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        // console.log(action.payload, '<-- addContact in ContactSlice');
        state.push(action.payload);
      },
      prepare(name, number) {
        console.log(
          name,
          number,
          shortid(),
          '<-- addContact in prepare ContactSlice'
        );
        return {
          payload: {
            name,
            number,
            id: shortid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      // console.log(action.payload, '<-- Delete in ContactSlice');
      const index = state.findIndex(
        contactItem => contactItem.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

///

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

///

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
