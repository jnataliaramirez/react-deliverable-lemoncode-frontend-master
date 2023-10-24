import axios from 'axios';
import { MemberEntityApi } from './list.api-model';

export const getMembers = async (
  organization: string
): Promise<MemberEntityApi[]> => {
  try {
    const res = await axios.get(
      `https://api.github.com/orgs/${organization}/members`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
