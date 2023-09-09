const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/gaurav89830");
  return res.json();
};

export default githubInfoLoader;
