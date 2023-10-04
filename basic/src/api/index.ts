import axios from "axios";

export const getMembers = async (organization: string) => {
  try {
    const res = await axios
      .get(`https://api.github.com/orgs/${organization}/members`);
    return res.data;
  } catch (err) {
    return console.error(err);
  }
};
