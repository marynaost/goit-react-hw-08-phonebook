import { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contacts-reducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import s from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameContactName = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase(),
    );

    const sameContactPhone = contacts.find(contact => phone === contact.phone);

    if (sameContactName && sameContactPhone) {
      toast.warning(`${name} is already in contacts `);
      toast.warning(`${phone} is already in contacts `);
    } else if (sameContactName) {
      toast.warning(`${name} is already in contacts `);
    } else if (sameContactPhone) {
      toast.warning(`${phone} is already in contacts `);
    } else {
      addContact({ name, phone });
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label className={s.label} htmlFor={phoneInputId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          onChange={handleChange}
          id={phoneInputId}
        />
      </label>
      <button className={s.button} type="submit" disabled={isLoading}>
        {isLoading ? 'Adding contact' : 'Add contact'}
      </button>
    </form>
  );
}
