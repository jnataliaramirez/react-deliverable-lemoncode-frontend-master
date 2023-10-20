import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'core';


export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate(routes.list);
    } else {
      alert('Usuario / contraseña no valido, psst... admin / test');
    }
  };

  return <LoginComponent  onLogin={handleNavigation} />;
};
