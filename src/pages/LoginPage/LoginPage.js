import { useState } from 'react';
import { useLoginUserMutation } from 'redux/auth/auth-reducer';
import s from './LoginPage.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    loginUser({ email, password });
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className={s.form}>
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
