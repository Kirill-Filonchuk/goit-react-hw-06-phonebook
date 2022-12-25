import './App.css';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter'
import { ContactList } from '../ContactList'

export const App = () => {
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
