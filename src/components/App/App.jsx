import './App.css';
import { useState, useEffect } from 'react';
import shortid from 'shortid';

import initialContact from '../../data/start-data.json';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter'
import { ContactList } from '../ContactList'
  

console.log(initialContact)
export const App = () => {
  const [contacts, setContacts] = useState(initialContact);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);
    if (parsetContacts) {
      setContacts([...parsetContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const cont = {
      id: shortid.generate(),
      name,
      number,
    };
    const checkName = cont.name.toLowerCase();
    if (contacts.some(item => item.name.toLowerCase() === `${checkName}`)) {
      alert(`${cont.name} is already in contacts`);
      return;
    };
    setContacts([...contacts, cont]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteCont = id => {
    setContacts(() => contacts.filter(con => con.id !== id));
  };

  const visibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(con => con.name.toLowerCase().includes(normalizedFilter));
    return visibleContact;
  }

  return (
      <div className="container">
      <h1>Phonebook</h1>

      <ContactForm formSubmitHandler={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList visibleContact={visibleContact()} onDeleteCont={onDeleteCont} />
    </div>
  )
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
