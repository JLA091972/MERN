import { Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import People from "./views/People";
import Planets from "./views/Planets";
import Starships from "./views/Starships";
import Films from "./views/Films";
import Species from "./views/Species";

function App() {
  return (
    <div className="App">
      <h1> WELCOME TO THE DARK SIDE</h1>
      {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Navigation /> } />
          <Route path="/films/:id" element={<Films />}/>
          <Route path="/people/:id" element={<People />}/>
          <Route path="/planets/:id" element={<Planets />}/>
          <Route path="/starships/:id" element={<Starships/>}/>
          <Route path="/species/:id" element={<Species />}/>
        </Routes>
    </div>
  );
}

export default App;
