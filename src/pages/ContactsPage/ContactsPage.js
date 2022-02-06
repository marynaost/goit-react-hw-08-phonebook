import { ToastContainer } from 'react-toastify';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function ContactPage() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} />
    </div>
  );
}
