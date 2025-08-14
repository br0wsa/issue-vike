import { useData } from "vike-react/useData";

export default function Page() {
  const { githubUser } = useData();
  console.log(githubUser);

  return (
    <>
      <ul>
        <li>
          <strong>
            <code>@id</code> preview route
          </strong>
          :<br />- In <em>development</em>, directly opening a URL like <code>http://localhost:3000/@65465666</code>{" "}
          results in:
          <code>Cannot GET /@65465666</code>.<br />- In <em>build/preview</em>, the <code>+data.ts</code> file for this
          route is <strong>not</strong> executed, so no data is fetched.
          <br />- This route is meant to act like a dynamic index page that supports parameters and has a custom layout,
          but both build and preview modes currently fail to load its data correctly.
        </li>
        <li>
          <strong>(app) directory</strong>:<br />- Pages inside <code>app/</code> can fetch data normally via their{" "}
          <code>data()</code> functions.
          <br />- However, the index page (<code>/</code>) has a <strong>Vike@0.4.236 bug</strong>: navigating to it via
          <code>navigate("/")</code> does <em>not</em> refetch data.
          <br />
          - This causes missing or stale data (404/undefined) unless the page is fully reloaded.
          <br />- Other routes (e.g. <code>/not-index</code>) work fine and refetch data on navigation.
        </li>
      </ul>

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
