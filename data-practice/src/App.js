import React, { useState} from 'react'
import "./App.css";
import { GitHubUser } from "./components/GitInfo";
import SearchForm from './components/SearchForm'
// import { TahoePeaks } from "./components/RedenrList";
// import { BigData } from "./components/VirtualList";

function App() {
  const [login, setLogin] = useState("liyangw");
  return (
    <div>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      {/* <TahoePeaks/>  */}

      {/* <BigData /> */}
    </div>
  );
}

export default App;
