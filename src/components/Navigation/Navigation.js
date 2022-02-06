import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import s from './Navigation.module.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
