import React /*, { useState, useEffect }*/ from "react";
import  Fetch  from "./Fetch";
import UserDetails from "./UserDetails";

export function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}


// const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// export function GitHubUser({ login }) {
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
