import React from 'react';
import { MyContextProviderProps } from '../types/type.context';
import { UserProfile, firstProfileCreate } from './profile.vm';

interface ProfileContext extends UserProfile {
  setUserProfile: (value: UserProfile) => void;
}

export const MyProfileContext = React.createContext<ProfileContext>({
  userProfile: { username: '', password: '' },
  setUserProfile: () => {},
});

export const MyProfileContextProvider: React.FC<MyContextProviderProps> = (
  props
) => {
  const [userProfile, setUserProfile] = React.useState(firstProfileCreate());

  return (
    <MyProfileContext.Provider
      value={{
        userProfile: userProfile.userProfile,
        setUserProfile,
      }}
    >
      {props.children}
    </MyProfileContext.Provider>
  );
};
