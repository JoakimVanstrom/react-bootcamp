import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BettyWhite from "./pages/BettyWhite";
import Counter from "./pages/Counter";
import InputDuplication from "./pages/InputDuplication";
import DiceRoller from "./pages/DiceRoller";
import FormSubPrev from "./pages/FormSubPrev";
import Fruits from "./pages/Fruits";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/betty" element={<BettyWhite />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/inputdup" element={<InputDuplication />} />
          <Route path="/diceroller" element={<DiceRoller />} />
          <Route path="/form" element={<FormSubPrev />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
