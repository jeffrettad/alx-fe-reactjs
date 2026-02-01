import axios from "axios";

export const searchGithubUsers = async (query, page = 1) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`
  );
  return response.data;
};
