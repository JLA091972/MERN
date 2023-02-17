import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/:number" element={<Number />}> </Route>
          <Route path="/hello/:theword" element={<Hello />}></Route>
          <Route path="/hello/:theword/:backcolor/:frontcolor" element={<Hello />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
