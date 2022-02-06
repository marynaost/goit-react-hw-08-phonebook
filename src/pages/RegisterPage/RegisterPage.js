import { useState } from 'react';
import { useRegisterUserMutation } from 'redux/auth/auth-reducer';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    registerUser({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
