import React from "react";

export const Searcher = ({ organization, updateName }) => {
  const handleKeypress = (ev) => {
    if (ev.keyCode === 13) {
      updateName(ev.target.value);
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateName(ev.target.organization.value);
  };

  return (
    <form onSubmit={handleSubmit} className="searcher-container">
      <input
        type="search"
        id="organization"
        name="organization"
        onKeyDown={handleKeypress}
      />
      <button type="submit">
        Buscar
      </button>
    </form>
  );
};
