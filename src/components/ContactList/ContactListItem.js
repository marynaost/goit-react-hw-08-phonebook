import { useDeleteContactsMutation } from 'redux/contacts/contacts-reducer';
import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export function ContactListItem({ id, name, phone }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  return (
    <li className={s.list}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContacts(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting..' : 'Delete'}
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
