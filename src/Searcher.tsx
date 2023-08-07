import React from "react";

export const Searcher = ({ updateName }) => {
  const handleKeypress = (ev) => {
    if (ev.keyCode === 13) {
      updateName(ev.target.value);
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
  };

  return (
    <form className="searcher-container">
      <input
        type="search"
        id="organization"
        name="organization"
        placeholder="lemoncode"
        onKeyDown={handleKeypress}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </form>
  );
};
