// +data.ts

export const data = async (pageContext) => {
  const response = await fetch('https://api.github.com/users/br0wsa/followers');
  const githubUser = await response.json();



  return {
    githubUser,
  };
};
