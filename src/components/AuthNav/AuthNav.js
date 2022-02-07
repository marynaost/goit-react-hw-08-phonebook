import { NavLink } from 'react-router-dom';
import s from '../HeadersStyles.module.scss';

export default function AuthNav(params) {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Login
      </NavLink>
    </div>
  );
}
