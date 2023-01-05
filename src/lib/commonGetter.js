const getRepoName = (repo) => repo.full_name;

const getRepoStars = (repo) => repo.stargazers_count;

const getRepoDescription = (repo) => repo.description;

const getRepoLanguage = (repo) => repo.language;

export default {
  getRepoName,
  getRepoStars,
  getRepoDescription,
  getRepoLanguage,
};
