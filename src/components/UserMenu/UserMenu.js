import { useSelector } from 'react-redux';
import { useLogoutUserMutation } from 'redux/auth/auth-reducer';
import authSelectors from 'redux/auth/auth-selectors';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const [logoutUser] = useLogoutUserMutation();

  return (
    <div className={s.container}>
      <span className={s.name}>Wellcome, {name}</span>
      <button type="button" className={s.button} onClick={() => logoutUser()}>
        Log out
      </button>
    </div>
  );
}
