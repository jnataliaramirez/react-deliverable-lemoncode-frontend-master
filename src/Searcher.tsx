import React from "react";
import { MyContext } from "./context";

export const Searcher = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setOrganization = myContext.setOrganization;

  const handleKeypress = (ev) => {
    if (ev.keyCode === 13) {
      setOrganization(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setOrganization(ev.target.organization.value);
  };

  return (
    <form onSubmit={handleSubmit} className="searcher-container">
      <input
        type="search"
        id="organization"
        name="organization"
        defaultValue={organization}
        onKeyUp={handleKeypress}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
