import React from 'react';
import { MyContext } from '@/core';
import { ListComponent } from './list.component';
import { getMemberCollection } from './list.repository';

export const ListContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const members = myContext.members;
  const setMembers = myContext.setMembers;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  React.useEffect(() => {
    getMemberCollection(organization).then((memberCollection) => {
      setNumberPagination({
        pag: { ...numberPagination, count: memberCollection.length },
      });

      setMembers({
        members: memberCollection.slice(
          numberPagination.from,
          numberPagination.to
        ),
      });
    });
  }, [organization, numberPagination.from, numberPagination.to]);

  return <ListComponent members={members} />;
};
