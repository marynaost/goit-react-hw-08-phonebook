import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from 'redux/auth/auth-reducer';
import authSelectors from 'redux/auth/auth-selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home" */),
);
const ContactPage = lazy(() =>
  import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts" */),
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "register" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage' /* webpackChunkName: "login" */),
);

export default function App() {
  const token = useSelector(authSelectors.getToken);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { isLoading } = useFetchCurrentUserQuery(token, {
    skip: token === null,
  });

  return (
    <Container>
      {!isLoading && (
        <>
          <AppBar />
          <Suspense
            fallback={
              <h1 style={{ textAlign: 'center', color: 'white' }}>Loading..</h1>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={isLoggedIn ? <ContactPage /> : <HomePage />}
              />
            </Routes>
          </Suspense>
          <ToastContainer autoClose={2000} />
        </>
      )}
    </Container>
  );
}
