import React from 'react';
import { MyContext } from '@/core/context';
import { getMembers } from '../api';
import { ListPagination } from '../components/ListPagination';
import { Searcher } from '../components/Searcher';
import { ListTable } from '../components/ListTable';
import { Title } from '../components/Title';
import { Footer } from '../components/Footer';

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
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

  return (
    <>
      <Title>Organization list: {organization}</Title>
      <Searcher />
      <ListPagination />
      <ListTable />
      <Footer />
    </>
  );
};
