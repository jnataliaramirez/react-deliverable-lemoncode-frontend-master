import axios from "axios";

export const getMembers = (organization: string) => {
  return axios
    .get(`https://api.github.com/orgs/${organization}/members`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
