import React, { ReactNode } from "react";
import { MemberEntity, Members } from "./members.vm";
import { Organization, createOrganizationFirstName } from "./organization.vm";
import { Page, Pagination } from "./pagination.vm";


interface Context extends Organization, Members, Pagination {
  setOrganization: (value: Organization) => void;
  setMembers: (value: MemberEntity[]) => void;
  setPag: (value: Page) => void; 
}

export const MyContext = React.createContext<Context>({
  organization: "",
  setOrganization: (value) => {},
  members: [],
  setMembers: (value) => {},
  pageSize: 0,
  pag: {
    page: 1,
    count: 0,
    from: 0,
    to: 0,
  },
  setPag(value) {},
});

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = (props) => {
  const [organization, setOrganization] = React.useState<Organization>(createOrganizationFirstName());

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const pageSize: number = 6;
  const [pag, setPag] = React.useState<Pagination>({
    page: 1,
    count: 0,
    from: 0,
    to: pageSize,
  });

  return (
    <MyContext.Provider
      value={{
        organization: organization.organization,
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
