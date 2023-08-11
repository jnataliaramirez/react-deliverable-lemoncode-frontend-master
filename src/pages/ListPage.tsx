import React from "react";
import { MyContext } from "../context";
import { getMembers } from "../api";
import { ListPagination } from "../components/ListPagination";
import { Searcher } from "../components/Searcher";
import { ListTable } from "../components/ListTable";
import { Title } from "../components/Title";

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setMembers = myContext.setMembers;
  const numberPagination = myContext.pag;
  const setNumberPagination = myContext.setPag;

  React.useEffect(() => {
    const fetchMembers = async (organization: string) => {
      const membersRes = await getMembers(organization);
      setNumberPagination({ ...numberPagination, count: membersRes.length });
      setMembers(membersRes.slice(numberPagination.from, numberPagination.to));
    };
    fetchMembers(organization);
  }, [organization, numberPagination.from, numberPagination.to]);

  return (
    <>
      <Title>Listado de la organización: {organization}</Title>
      <Searcher />
      <ListPagination />
      <ListTable />
    </>
  );
};
