import s from './ContactList.module.css';

export const ContactList = ({visibleContact, onDeleteCont}) => (
  
    <ul className={s.list}>
        {visibleContact.map(({id, name, number }) => (
            <li key={id} className={s.item}>
                {name}:<span>{number}</span>
                <button type="button" onClick={()=>onDeleteCont(id)} className={s.btnForm}>Delete</button>
            </li>
        ))}
    </ul>
);