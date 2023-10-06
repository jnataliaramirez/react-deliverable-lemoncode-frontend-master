export interface Organization {
  organization: string;
}

export const createOrganizationFirstName = () : Organization => ({
  organization: "microsoft",
});
