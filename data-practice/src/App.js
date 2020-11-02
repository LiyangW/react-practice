import React, { useState } from "react";
import "./App.css";
import { GitHubUser } from "./components/GitInfo";
import SearchForm from "./components/SearchForm";
import UserRepositories from "./components/UserRepositories";
import GitReadme from "./components/GitReadme";
// import { TahoePeaks } from "./components/RedenrList";
// import { BigData } from "./components/VirtualList";

function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };
  if (!login) {
    return <SearchForm value={login} onSearch={handleSearch} />;
  }
  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
      <GitHubUser login={login} />
      <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo} />
      <GitReadme login={login} repo={repo} />
      {/* <TahoePeaks/>  */}
      {/* <BigData /> */}
    </>
  );

  // return (
  //   <div>
  //     <SearchForm value={login} onSearch={handleSearch} />
  //     {login && <GitHubUser login={login} />}
  //     {login && (
  //       <UserRepositories
  //         login={login}
  //         selectedRepo={repo}
  //         onSelect={setRepo}
  //       />
  //     )}
  //     {login && repo && <GitReadme login={login} repo={repo} />}
  //     {/* <TahoePeaks/>  */}
  //     {/* <BigData /> */}
  //   </div>
  // );
}

export default App;
