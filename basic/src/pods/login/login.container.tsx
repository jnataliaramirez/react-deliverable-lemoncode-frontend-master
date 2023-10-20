import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'core';
import { MyProfileContext } from '@/core/profile/profile.context';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const myProfileContext = React.useContext(MyProfileContext);

  const username = myProfileContext.userProfile.username;
  const password = myProfileContext.userProfile.password;

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate(routes.list);
    } else {
      alert('Usuario / contraseña no valido, psst... admin / test');
    }
  };

  // * TODO hacer component dumb
  return <LoginComponent onLogin={handleNavigation} />;
};
