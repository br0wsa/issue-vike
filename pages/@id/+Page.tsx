import React from "react";
import { useData } from "vike-react/useData";

export default function Page() {
  const { githubUser, id } = useData();
  console.log(githubUser);

  return (
    <>
      <h2>{id}</h2>
      <ul>
        {Array.isArray(githubUser) && githubUser.length > 0 ? (
          githubUser.map((u) => (
            <li key={u.id}>
              <a href={u.html_url} target="_blank" rel="noopener noreferrer">
                {u.login}
              </a>
            </li>
          ))
        ) : (
          <li>{githubUser?.message}</li>
        )}
      </ul>
    </>
  );
}
