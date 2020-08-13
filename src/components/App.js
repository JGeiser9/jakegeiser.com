import React from "react";
import { CssBaseline } from "@material-ui/core";

// Components
import Navbar from "components/navigation/Navbar";
import Hero from "components/sections/Hero";

function App() {
  return (
    <React.Fragment>
      {/* Material UI CSS Reset */}
      <CssBaseline />
      <Navbar />
      <Hero />
    </React.Fragment>
  );
}

export default App;
