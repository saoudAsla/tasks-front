import "./App.css";
import Tasks from "./pages/Tasks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/" element={<Tasks/>} />
        <Route path="/updateTask/:id" element={<AddTask />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
