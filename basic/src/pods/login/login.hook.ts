import { useNavigate } from 'react-router-dom';
import { routes } from 'core';

export const useLoginHook = () => {
  const navigate = useNavigate();

  const loginSucceededAction = () => {
    navigate(routes.list);
  };

  const loginFailedAction = () => {
    alert('User / password not valid, psst... admin / test');
  };
  
  return { loginSucceededAction, loginFailedAction };
};
