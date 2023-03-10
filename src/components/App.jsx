import { useEffect, useState } from 'react';
import Box from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import basicContacts from './ContactList/basicContacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? basicContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterOnChange = event => {
    setFilter(event.target.value);
  };

  const toLowerCaseFilter = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const normalizeContact = toLowerCaseFilter();

  return (
    <Box mx="auto" maxWidth={500}>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        Phonebook
      </h2>
      <ContactForm addContact={addContact} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Box
        p={32}
        mx="auto"
        maxWidth={500}
        background="#292929"
        borderRadius={30}
      >
        <Filter filterOnChange={filterOnChange} value={filter} />
        <ContactList contacts={normalizeContact} onDelete={deleteContact} />
      </Box>
    </Box>
  );
};
