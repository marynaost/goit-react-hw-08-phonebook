import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

export default function AuthNav(params) {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Логин
      </NavLink>
    </div>
  );
}
