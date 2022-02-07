import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function ContactPage() {
  return (
    <div className="contactsContainer">
      <div className="listsWrap">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      <div className="formWrap">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    </div>
  );
}
