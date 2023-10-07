import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Driver from "./components/Pages/Driver";
import Team from "./components/Pages/Team";
import Country from "./components/Pages/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/team" element={<Team />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
