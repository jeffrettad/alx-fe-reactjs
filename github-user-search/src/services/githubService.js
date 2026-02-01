import axios from "axios";

/**
 * Search GitHub users with advanced parameters
 * @param {string} username - GitHub username or keyword
 * @param {string} location - User location (optional)
 * @param {number} minRepos - Minimum number of repos (optional)
 * @param {number} page - Pagination page (default: 1)
 */
export const searchGithubUsers = async (username, location = "", minRepos = 0, page = 1) => {
  // Build GitHub search query
  let query = username ? `${username} type:user` : "type:user";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
  );

  return response.data;
};
