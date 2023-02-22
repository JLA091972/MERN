import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Main from "./views/Main";
import DisplayOne from "./views/DisplayOne";
import EditItem from "./views/EditItem";



function App() {
  return (
    <div className="App">
      <h1> Welcome to Whatever Market </h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<DisplayOne/>} />
        <Route path="/:id/edit" element={<EditItem/>}/>
      </Routes>

    </div>
  );
}

export default App;
