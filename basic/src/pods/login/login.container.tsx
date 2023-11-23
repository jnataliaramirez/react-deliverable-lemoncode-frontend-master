import React from 'react';
import { LoginComponent } from './login.component';
import { doLogin } from './login.api';
import { useLoginHook } from './login.hook';
import { Login } from './login.vm';

export const LoginContainer: React.FC = () => {
  const { loginSucceededAction, loginFailedAction } = useLoginHook();

  const handleNavigation = (login: Login) => {
    const { username, password } = login;
    
    doLogin(username, password).then((result) => {
      if (result) {
        loginSucceededAction();
      } else {
        loginFailedAction();
      }
    });
  };

  return <LoginComponent onLogin={handleNavigation} />;
};
