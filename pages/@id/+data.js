// +data.ts
import { useConfig } from 'vike-react/useConfig';

export const data = async (pageContext) => {
  const config = useConfig();

  // Get dynamic id from route or default
  const rawId = decodeURIComponent(pageContext?.routeParams?.id || 'br0wsa');
  console.log(`Raw ID: ${rawId}`);

  // Sanitize: remove leading @ or %40
  const id = rawId.startsWith('%40') || rawId.startsWith('@')
    ? rawId.replace(/^(@|%40)/, '')
    : rawId;

  console.log(`Sanitized ID: ${id}`);

  // Fetch followers for br0wsa (fixed user)
  const response = await fetch('https://api.github.com/users/br0wsa/followers');
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
