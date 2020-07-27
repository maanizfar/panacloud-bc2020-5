import React from "react";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";
import WhatIsIt from "./components/WhatIsIt";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <WhatIsIt />
    </>
  );
}

export default App;
