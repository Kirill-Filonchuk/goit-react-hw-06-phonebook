/*eslint-env es6*/

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import s from './ContactForm.module.css'

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
 
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    const number = form.elements[1].value
    // console.log(name, number);
    // console.log(contacts)
    const checkName = name.toLowerCase();
    // console.log(checkName)
      if (contacts.some(contactItem => contactItem.name.toLowerCase() === `${checkName}`)) {
          alert(`${name} is already in contacts`);
          return;
    };
    dispatch(addContact(name, number));
   
    form.reset();
  }
  
  return (
    <form onSubmit={handleSubmit} className={s.form} >
      Name
          
      <input
        type="text"
        name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      // value={name}
      // onChange={handleChange}
      />
         
      Number
         
      <input
        type="tel"
        name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      // value={number}
      // onChange={handleChange}
      />
          
      <button type="submit" className={s.btnForm}>Add contact</button>
    </form>
  )
};