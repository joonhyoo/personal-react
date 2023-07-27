import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
