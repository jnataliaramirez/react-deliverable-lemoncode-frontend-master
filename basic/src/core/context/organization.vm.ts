export interface Organization {
  organization: string;
}

export const createOrganizationFirst = () : Organization => ({
  organization: "lemoncode",
});
