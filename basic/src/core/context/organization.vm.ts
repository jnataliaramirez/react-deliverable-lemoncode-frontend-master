export interface Organization {
  organization: string;
}

export const firstOrganizationCreate = (): Organization => ({
  organization: 'lemoncode',
});
