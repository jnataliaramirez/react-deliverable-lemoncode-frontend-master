import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'core';
import { LoginComponent } from './login.component';

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (username: string, password: string) => {
    if (username === 'admin' && password === 'test') {
      navigate(routes.list);
    } else {
      alert('Usuario / contraseña no valido, psst... admin / test');
    }
  };

  return <LoginComponent onLogin={handleNavigation} />;
};
