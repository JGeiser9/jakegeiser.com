import React from "react";
import { CssBaseline } from "@material-ui/core";

// Components
import Navbar from "components/navigation/Navbar";
import Hero from "components/sections/Hero";
import Work from "components/sections/Work";
import Projects from "components/sections/Projects";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Work />
      <Projects />
    </React.Fragment>
  );
}

export default App;
