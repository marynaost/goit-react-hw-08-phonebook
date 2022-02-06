import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import s from './Filter.module.scss';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>
        Find contact by name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
}

export default Filter;
