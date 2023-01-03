import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import AllBlogs from "./components/Allblogs";
import Blogdetails from "./components/Blogdetails";
import Newblog from "./components/Newblog";
import Contact from "./components/Contact";
import NotFound from "./components/Notfound";
import DarkLightTheme from "./components/darklighttheme";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <header className="App">
        <Navbar />
        <div className="darklightswitch">
          <DarkLightTheme />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<Blogdetails />} />
        <Route path="/newblog" element={<Newblog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
