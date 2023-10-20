export interface ProfileEntity {
  username: string;
  password: string;
}

export interface UserProfile {
  userProfile: ProfileEntity;
}

export const firstProfileCreate = (): UserProfile => ({
  userProfile: { username: 'admin', password: 'test' },
});
