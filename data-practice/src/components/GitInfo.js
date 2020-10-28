import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks";

// const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export function GitHubUser({ login }) {
  // const [data, setData] = useState(loadJSON(`user:${login}`));
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!login) return;
  //   if (data && data.login === login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(setData)
  //     .then(() => console.log("feteched"))
  //     .then(() => setLoading(false))
  //     .catch(setError);
  //   // eslint-disable-next-line
  // }, [login]);

  // useEffect(() => {
  //   if (!data) return;
  //   if (data.login === login) return;
  //   const { name, avatar_url, location } = data;
  //   saveJSON(`user:${login}`, {
  //     name,
  //     login,
  //     avatar_url,
  //     location,
  //   });
  //   // eslint-disable-next-line
  // }, [data]);
  
  const { data, error, loading } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (data)
    return (
      <div className="githubUser">
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
        <div>
          <h1>{data.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>
    );

  return null;
}
