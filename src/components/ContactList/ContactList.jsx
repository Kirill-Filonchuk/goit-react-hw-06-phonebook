import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { getRenderContacts } from './helpersFunction';

import s from './ContactList.module.css';
 
export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterStateData = useSelector(getFilter);
    
    console.log(filterStateData, '<--- ContactList FilterState');

    const contactsToRender = getRenderContacts(contacts, filterStateData);
    console.log(contactsToRender, '<--- ContactList contactsToRender');

    const dispatch = useDispatch();

    const onDeleteCont = (id) => {
        dispatch(deleteContact(id));
    }
    
    return (
        <ul className={s.list}>
            {contactsToRender.map(({ name, number, id }) => (
                <li key={id} className={s.item}>
                    {name}:<span>{number}</span>
                    <button type="button" onClick={() => onDeleteCont(id)} className={s.btnForm}>Delete</button>
                </li>
            ))}
        </ul>
    )
};