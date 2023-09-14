import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Turniere from "./components/pages/Turniere/Turniere";
import OnlineLiga from "./components/pages/OnlineLiga/OnlineLiga";
import Neujahrsturnier from "./components/pages/Neujahrsturnier/Neujahrsturnier";
import BpmPokal from "./components/pages/BpmPokal/BpmPokal";
import Anmeldung from "./components/pages/Anmeldung/Anmeldung";
import WerSindWir from "./components/pages/WerSindWir/WerSindWir";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/turniere"
          element={<Turniere />}
        />
        <Route
          path="/online_liga"
          element={<OnlineLiga />}
        />
        <Route
          path="/neujahrsturnier"
          element={<Neujahrsturnier />}
        />
        <Route
          path="/bpm_pokal"
          element={<BpmPokal />}
        />
        <Route
          path="/anmeldung"
          element={<Anmeldung />}
        />
        <Route
          path="/wer_sind_wir"
          element={<WerSindWir />}
        />
      </Routes>
    </>
  );
}

export default App;
