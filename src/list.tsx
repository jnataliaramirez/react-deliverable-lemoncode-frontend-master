import React from "react";
import { Link } from "react-router-dom";
import { Searcher } from "./Searcher";
import { MyContext } from "./context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [organization]);

  return (
    <>
      <h2>Hello from List page</h2>

      <Searcher />

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
      </div>
      {members.map((member) => (
        <span key={member.id} className="rapido">
          <img src={member.avatar_url} />
          <p>{member.id}</p>
          <p>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </p>
        </span>
      ))}
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
