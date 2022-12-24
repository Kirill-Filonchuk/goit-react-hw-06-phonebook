import './App.css';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter'
import { ContactList } from '../ContactList'

export const App = () => {
 
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsetContacts = JSON.parse(contacts);
  //   if (parsetContacts) {
  //     setContacts([...parsetContacts]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);

  // const formSubmitHandler = ({ name, number }) => {
  //   const contactItem = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
    // const checkName = contactItem.name.toLowerCase();
    // if (contacts.some(item => item.name.toLowerCase() === `${checkName}`)) {
    //   alert(`${contactItem.name} is already in contacts`);
    //   return;
  //   };
  //   setContacts([...contacts, contactItem]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const onDeleteCont = id => {
  //   setContacts(() => contacts.filter(contactItem => contactItem.id !== id));
  // };

  // const visibleContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const visibleContact = contacts.filter(contactItem => contactItem.name.toLowerCase().includes(normalizedFilter));
  //   return visibleContact;
  // }

  return (
      <div className="container">
      <h1>Phonebook</h1>
          <ContactForm />
              {/* <ContactForm formSubmitHandler={formSubmitHandler} /> */}

      <h2>Contacts</h2>
          <Filter />
              {/* <Filter value={filter} onChange={changeFilter} /> */}
          <ContactList />
              {/* <ContactList visibleContact={visibleContact()} onDeleteCont={onDeleteCont} /> */}
    </div>
  )
}
