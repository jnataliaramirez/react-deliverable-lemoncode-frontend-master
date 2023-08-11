import React from "react";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface Pagination {
  count: number;
  from: number;
  to: number;
}

interface Context {
  organization: string;
  setOrganization: (value: string) => void;
  members: MemberEntity[];
  setMembers: (value: MemberEntity[]) => void;
  pageSize: number;
  pag: Pagination;
  setPag: (value: Pagination) => void;
}

export const MyContext = React.createContext<Context>({
  organization: "",
  setOrganization: (value) => {},
  members: [],
  setMembers: (value) => {},
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

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const pageSize: number = 6;
  const [pag, setPag] = React.useState<Pagination>({
    count: 0,
    from: 0,
    to: pageSize,
  });

  return (
    <MyContext.Provider
      value={{
        organization,
        setOrganization,
        members,
        setMembers,
        pageSize,
        pag,
        setPag,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
