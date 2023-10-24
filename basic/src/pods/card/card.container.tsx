import React from 'react';
import { CardComponent } from './card.component';
import { useParams } from 'react-router-dom';
import { MyContext, MemberEntity } from '@/core';

export const CardContainer = () => {
  const { id } = useParams();
  const myContext = React.useContext(MyContext);
  const members = myContext.members;

  const memberFind = (id: string): MemberEntity =>
    members.find((member) => member.login === id);

  const member = memberFind(id);

  console.log('member', member)

  const newMember = {
    avatar_url: member.avatar_url,
    id: member.id,
    login: member.login
  };

  return <CardComponent member={newMember} />;
};
