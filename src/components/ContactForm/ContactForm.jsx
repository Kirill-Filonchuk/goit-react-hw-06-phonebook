import { useState } from 'react';
import s from './ContactForm.module.css'

export const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        if (name === "name") {
            setName(value);
        };

        if (name === "number") {
            setNumber(value);
        }
    };

    const reset = () => {
        setName("");
        setNumber("");
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.formSubmitHandler({ name, number });
        reset();
    }
    return (
             <form onSubmit={handleSubmit} className={s.form}>
          Name
          
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
         
          Number
         
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
          
          <button type="submit" className={s.btnForm}>Add contact</button>
        </form>
        )
}