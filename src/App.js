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
      <WhatIsIt
        heading="Our takeover, but what is it?"
        image="images/macaque.gif"
        text="We transform your school into a country for a day then provide you
            with a 2 week related curriculum that encompasses all subjects. We
            provide a fantastic learning experience for every age group."
      />
      <Countries />
      <WhatIsIt
        heading="Not found the country you’re looking for?"
        image="images/Liam-No-Background.gif"
        text="We can tailor make a takeover for any nation. With our vast knowledge, we can take your children on a journey to Nepal, South Africa or any other country in this wonderful world all in the comfort of your own school. "
      />
    </>
  );
}

export default App;
