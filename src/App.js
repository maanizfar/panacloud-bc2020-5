import React from "react";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";
import WhatIsIt from "./components/WhatIsIt";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <WhatIsIt />
      <Countries />
    </>
  );
}

export default App;
