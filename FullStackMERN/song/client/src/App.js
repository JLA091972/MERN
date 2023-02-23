import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Display from "./components/Display";
import Create from "./components/Create";
import Details from "./components/Details";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Song Bird</h1>
      <Routes>
        <Route path = '/' element={<Display />} />
        <Route path = '/create' element={<Create />} />
        <Route path = '/details/:id' element={<Details />} />
        <Route path = '/update/:id' element={<Update />} />
        <Route path = '/delete/:id' element={<Delete />} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
