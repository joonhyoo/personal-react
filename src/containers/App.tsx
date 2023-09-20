import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import BlogPage from "./BlogPage";
import AboutBlogSpacer from "../assets/images/about-blog-spacer.svg";
import BlogProjectSpacer from "../assets/images/blog-project-spacer.svg";
import AboutSpacer from "../components/AboutSpacer";
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
              <AboutSpacer />
              <About />
              <img src={AboutBlogSpacer} className="spacer"></img>
              <Blogs />
              <img src={BlogProjectSpacer} className="spacer"></img>
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
