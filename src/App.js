import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BettyWhite from "./pages/BettyWhite";
import Counter from "./pages/Counter";
import InputDuplication from "./pages/InputDuplication";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/betty" element={<BettyWhite />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/inputdup" element={<InputDuplication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
