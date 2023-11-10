import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Registation from "./Components/Registation";
import { ToastContainer } from "react-toastify";
import AllUserData from "./Components/AllUserData";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Registation />} />
          <Route path="/user-data" element={<AllUserData />} />
        </Routes>
  );
}

export default App;
