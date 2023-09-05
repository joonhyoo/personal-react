import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import BlogPage from "./BlogPage";

import { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Home />
              <About />
              <Blogs />
              <Projects />
              <Contact />
            </Fragment>
          }
        />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
