// import { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, AddContact, Text } from './ContactForm.styled';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { useState } from 'react';

// export class ContactForm1 extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleOnChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   hanldeSubmit = event => {
//     const { addContact } = this.props;
//     event.preventDefault();
//     addContact({ ...this.state });
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.hanldeSubmit}>
//         <label>
//           <Text>
//             <FaUserCircle color="white" size={30} />
//             Username:
//           </Text>
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleOnChange}
//           />
//         </label>
//         <label>
//           <Text>
//             <BsFillTelephonePlusFill color="white" size={30} /> Number:
//           </Text>
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleOnChange}
//           />
//         </label>
//         <AddContact type="submit">Add contact</AddContact>
//       </Form>
//     );
//   }
// }

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.log('error');
    }
  };

  const hanldeSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hanldeSubmit}>
      <label>
        <Text>
          <FaUserCircle color="white" size={30} />
          Username:
        </Text>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnChange}
        />
      </label>
      <label>
        <Text>
          <BsFillTelephonePlusFill color="white" size={30} /> Number:
        </Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleOnChange}
        />
      </label>
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
};

ContactForm.propTypes = {
  hanldeSubmit: PropTypes.func,
};
