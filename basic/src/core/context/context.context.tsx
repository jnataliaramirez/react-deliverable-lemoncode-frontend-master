import React, { ReactNode } from 'react';
import { Pagination, firstPaginationCreate } from './pagination.vm';
import { Members, firstMembersCreate } from './members.vm';
import { Organization, firstOrganizationCreate } from './organization.vm';

interface Context extends Organization, Members, Pagination {
  setOrganization: (value: Organization) => void;
  setMembers: (value: Members) => void;
  setPag: (value: Pagination) => void;
}

export const MyContext = React.createContext<Context>({
  organization: '',
  setOrganization: () => {},

  members: [],
  setMembers: () => {},

  pag: {
    page: 1,
    count: 0,
    from: 0,
    to: 0,
    pageSize: 0,
  },
  setPag() {},
});

export interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = (props) => {
  const [organization, setOrganization] = React.useState<Organization>(
    firstOrganizationCreate()
  );

  const [members, setMembers] = React.useState<Members>(firstMembersCreate());

  const [pag, setPag] = React.useState<Pagination>(firstPaginationCreate());

  return (
    <MyContext.Provider
      value={{
        organization: organization.organization,
        setOrganization,
        members: members.members,
        setMembers,
        pag: pag.pag,
        setPag,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
