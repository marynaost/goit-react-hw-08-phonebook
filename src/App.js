// import { ToastContainer } from 'react-toastify';
// import './App.css';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
import { Routes, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import ContactPage from 'pages/ContactsPage/ContactsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
