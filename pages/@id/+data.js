// +data.ts
import { useConfig } from "vike-react/useConfig";

export const data = async (pageContext) => {
  const config = useConfig();

  // Get dynamic id from route or default
  const rawId = decodeURIComponent(pageContext?.routeParams?.id || "no ID starting by @");
  console.log(`Raw ID: ${rawId}`);

  // Sanitize: remove leading @ or %40
  const id = rawId.startsWith("%40") || rawId.startsWith("@") ? rawId.replace(/^(@|%40)/, "") : rawId;

  // Fetch followers for br0wsa (fixed user)
  const response = await fetch("https://api.github.com/users/br0wsa/followers");
  const githubUser = await response.json();

  // Set page config
  config({
    title: id,
  });

  return {
    githubUser,
    id,
  };
};
