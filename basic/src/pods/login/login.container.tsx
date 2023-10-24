import React from 'react';
import { LoginComponent } from './login.component';
import { doLogin } from './login.api';
import { useLoginHook } from './login.hook';

export const LoginContainer: React.FC = () => {
  const { loginSucceededAction, loginFailedAction } = useLoginHook();

  const handleNavigation = (username: string, password: string) => {
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
