import React from "react";
import "./App.scss";
import SettingsTable from "./components/SettingsTable";
import Main from "./components/Main";

function App() {
   return (
      <div className="App">
         <h1>Welcome to Matrix Builder</h1>
         <SettingsTable />
         <div className="separate"></div>
         <Main />
      </div>
   );
}

export default App;
