import "./App.css";
import Home from "./Content/Home";
import { Routes, Route } from "react-router-dom";
import AddTutorial from "./Content/AddTutorial";
import EditTutorial from "./Content/EditTutorial";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/tutorials" element={<Home />} />
        <Route path="/tutorials/Add" element={<AddTutorial />} />
        <Route path="/tutorials/Edit/:id" element={<EditTutorial />} />
      </Routes>
    </div>
  );
}
export default App;
