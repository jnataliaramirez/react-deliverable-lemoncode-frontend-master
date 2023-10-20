import React from 'react';
import { getMembers } from '@/api';
import { MyContext } from '@/core';
import { ListComponent } from './list.component';

export const ListContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const members = myContext.members;
  const setMembers = myContext.setMembers;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  React.useEffect(() => {
    const fetchMembers = async (organization: string) => {
      const membersRes = await getMembers(organization);
      setNumberPagination({
        pag: { ...numberPagination, count: membersRes.length },
      });
      setMembers({
        members: membersRes.slice(numberPagination.from, numberPagination.to),
      });
    };
    fetchMembers(organization);
  }, [organization, numberPagination.from, numberPagination.to]);

  return <ListComponent members={members} />;
};
