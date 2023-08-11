import React from "react";

interface Pagination {
  count: number;
  from: number;
  to: number;
}

interface Context {
  organization: string;
  setOrganization: (value: string) => void;
  pageSize: number;
  pag: Pagination;
  setPag: (value: Pagination) => void;
}

export const MyContext = React.createContext<Context>({
  organization: "",
  setOrganization: (value) => {},
  pageSize: 0,
  pag: {
    count: 0,
    from: 0,
    to: 0,
  },
  setPag(value) {},
});

export const MyContextProvider = (props) => {
  
  const [organization, setOrganization] = React.useState("Lemoncode");
  
  const pageSize: number = 6;
  const [pag, setPag] = React.useState<Pagination>({
    count: 0,
    from: 0,
    to: pageSize,
  });

  return (
    <MyContext.Provider
      value={{ organization, setOrganization, pag, setPag, pageSize }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
