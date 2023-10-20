import React from 'react';
import { Pagination, createPaginationFirst } from './pagination.vm';
import { Members, createMembersFirst } from './members.vm';
import { Organization, createOrganizationFirst } from './organization.vm';
import { MyContextProviderProps } from '../types';

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


export const MyContextProvider: React.FC<MyContextProviderProps> = (props) => {
  const [organization, setOrganization] = React.useState<Organization>(
    createOrganizationFirst()
  );

  const [members, setMembers] = React.useState<Members>(createMembersFirst());

  const [pag, setPag] = React.useState<Pagination>(createPaginationFirst());

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
