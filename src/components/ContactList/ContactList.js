import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contacts-reducer';
import { ContactListItem } from './ContactListItem';
import { getFilter } from 'redux/contacts/contacts-selectors';
import s from './ContactList.module.scss';

function ContactList() {
  const { data: contacts, error, isError } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  let filteredContacts = [];
  if (contacts) {
    filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  const showNotFound =
    filteredContacts.length === 0 || (isError && error.originalStatus === 404);
  const showFilteredContacts = filteredContacts && !isError;
  return (
    <>
      {showNotFound && "You haven't contacts!"}
      {showFilteredContacts && (
        <ul className={s.item}>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;
