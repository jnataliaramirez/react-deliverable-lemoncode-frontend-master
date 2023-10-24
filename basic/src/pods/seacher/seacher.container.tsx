import React from 'react';
import { MyContext } from '@/core';
import { SearcherComponent } from './seacher.component';

export const SearcherContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const organization = myContext.organization;
  const setOrganization = myContext.setOrganization;

  const handleKeypress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 13) {
      const inputElement = ev.target as HTMLInputElement;
      setOrganization({ organization: inputElement.value });
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.target as HTMLFormElement;
    const organizationInput = formElement.elements.namedItem(
      'organization'
    ) as HTMLInputElement;
    setOrganization({ organization: organizationInput.value });
  };

  return (
    <SearcherComponent
      organization={organization}
      onKeyPress={handleKeypress}
      onSubmit={handleSubmit}
    />
  );
};
