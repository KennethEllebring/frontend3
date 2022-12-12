import "./index.css";
import Cards from "./Cards";
import Profile from "./Profile";
import Popular from "./Popular";
import Adds from "./Adds";
import Tags from "./Tags";

function App() {
  return (
    <div className="App">
      <div className="wrap-all">
        <Cards />
        <div className="wrap-side">
          <Profile />
          <Popular />
          <Adds />
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default App;
