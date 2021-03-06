import React, { useState } from 'react';
import { connect } from 'react-redux';
import actionsContact from '../../redux/contacts-actions';
import s from './ContactForm.module.css'
  
function Form(props) {
  //Этот стейт оставляю
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
    
    
 const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
      return
    }
    if (name === 'number') {
      setNumber(value)
    }   
 };
  
  // console.log('props.value.items',props.value.items);
  // console.log('props', props);
  
  const handleSubmit = e => {
    e.preventDefault();
  //
        const checkName = name.toLowerCase();
      if (props.value.items.some(item => item.name.toLowerCase() === `${checkName}`)) {
        alert(`${name} is already in contacts`);
        //  reset();
        return;
      }

    // сразу отправляется в Глоб. Стейт-Redax state
    props.formSubmitHandler({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('')
  };
    
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

const mapStateToProps = state => {
  // console.log('state',state);
  return {
    value: state.contacts,
  }
};


const mapDispatchToProps = dispatch => {
  return {
    formSubmitHandler: (value) => dispatch(actionsContact.addContact(value)),
  }
  };

export default connect(mapStateToProps,mapDispatchToProps)(Form);

// class Form extends Component {
//     state = {
//      name: '',
//     number: '',
//     }
    
//  handleChange = event => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget);
//     // используем вычисляемые св-ва
//     this.setState({
//       [name]: value,
//     });
//     };
    
//       handleSubmit = e => {
//     e.preventDefault();
//     // const { name, number } = this.state;
//     // console.log(`
//     //   name: ${name}
//     //   number: ${number}
//     // `);
//     this.props.formSubmitHandler({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
    
//     render() {
//         return (
//              <form onSubmit={this.handleSubmit} className={s.form}>
//           Name
          
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
         
//           Number
         
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
          
//           <button type="submit" className={s.btnForm}>Add contact</button>
//         </form>
//         )
//     }
// }