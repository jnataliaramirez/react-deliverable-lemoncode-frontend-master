import React from "react";

interface UserContext {
  organization: string;
  setOrganization: (value: string) => void;
}

export const MyContext = React.createContext<UserContext>({
  organization: "",
  setOrganization: (value) => {},
});

export const MyContextProvider = (props) => {
  const [organization, setOrganization] = React.useState("Lemoncode");

  return (
    <MyContext.Provider value={{ organization, setOrganization }}>
      {props.children}
    </MyContext.Provider>
  );
};
