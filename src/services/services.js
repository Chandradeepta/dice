import octokit from "./api";

export const searchRepositories = async ({ query, sortBy }) => {
  const response = await octokit.request(
    `GET /search/repositories?q=${query}&sort=${sortBy}&order=desc`,
    {}
  );
  return response.data.items
};
