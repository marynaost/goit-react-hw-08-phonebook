import { useState } from 'react';
import { useLoginUserMutation } from 'redux/auth/auth-reducer';
import { Button, Form } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import s from '../PagesStyles.module.scss';

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
    <div className={s.container}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={s.label}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@mail.com"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={s.label}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="The password must contain at least 7 characters"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={s.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
