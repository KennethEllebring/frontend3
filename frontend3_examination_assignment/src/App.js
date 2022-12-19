import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import Search from "./components/Search";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    ////////// Different Routes depending on how many "sites" that is added to project///////////
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
